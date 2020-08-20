import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import {Icons, Input, Button, Link} from 'components';
import {STYLES} from 'styles/Theme';
import {CONSTANTS} from 'utils/Constants';
import {observer} from 'mobx-react';
import {LangModel} from 'models';
import {IScreenProps} from 'utils/Interfaces';

const Header = observer(({title, span}: {title: string; span: string}) => {
  return (
    <>
      <Icons.Logo />
      <Text style={[STYLES.title, styles.title]}>{title}</Text>
      <Text style={STYLES.span}>{span}</Text>
    </>
  );
});

const Login = observer(() => {
  return (
    <>
      <Header
        title={LangModel.rk('Добро пожаловать в RNShop')}
        span={LangModel.rk('Войдите, чтобы продолжить')}
      />
      <View style={styles.form}>
        <Input
          placeholder={LangModel.rk('Почта')}
          keyboardType="email-address"
          leftContent={<Icons.Email />}
        />
        <View style={STYLES.delimiterBig} />
        <Input
          placeholder={LangModel.rk('Пароль')}
          leftContent={<Icons.Lock />}
          secureTextEntry
        />
        <View style={STYLES.delimiterBig} />
        <Button
          title={LangModel.rk('Войти')}
          onPress={() => {
            LangModel.changeLang('ru');
          }}
        />
      </View>
    </>
  );
});

const Reg = observer(() => {
  return (
    <>
      <Header
        title={LangModel.rk('Давайте начнем')}
        span={LangModel.rk('Создать новый аккаунт')}
      />
      <View style={styles.form}>
        <Input
          placeholder={LangModel.rk('Фамилия')}
          leftContent={<Icons.User />}
        />
        <View style={STYLES.delimiterSmall} />
        <Input placeholder={LangModel.rk('Имя')} leftContent={<Icons.User />} />
        <View style={STYLES.delimiterSmall} />
        <Input
          placeholder={LangModel.rk('Почта')}
          keyboardType="email-address"
          leftContent={<Icons.Email />}
        />
        <View style={STYLES.delimiterSmall} />
        <Input
          placeholder={LangModel.rk('Пароль')}
          leftContent={<Icons.Lock />}
          secureTextEntry
        />
        <View style={STYLES.delimiterSmall} />
        <Input
          placeholder={LangModel.rk('Повторите пароль')}
          leftContent={<Icons.Lock />}
          secureTextEntry
        />
        <View style={STYLES.delimiterBig} />
        <Button
          title={LangModel.rk('Зарегистрироваться')}
          onPress={() => {
            LangModel.changeLang('ru');
          }}
        />
      </View>
    </>
  );
});

const Recovery = observer(() => {
  return (
    <>
      <Header
        title={LangModel.rk('Забыли пароль?')}
        span={LangModel.rk('Восстановление пароля')}
      />
      <View style={styles.form}>
        <Input
          placeholder={LangModel.rk('Почта')}
          keyboardType="email-address"
          leftContent={<Icons.Email />}
        />
        <View style={STYLES.delimiterBig} />
        <Button
          title={LangModel.rk('Восстановить')}
          onPress={() => {
            LangModel.changeLang('ru');
          }}
        />
      </View>
    </>
  );
});

export const LoginScreen = observer((props: IScreenProps) => {
  const [content, setContent] = React.useState<'login' | 'reg' | 'recovery'>(
    'login',
  );
  return (
    <>
      <KeyboardAvoidingView style={STYLES.container} behavior="padding">
        <SafeAreaView style={styles.close}>
          <Icons.Close
            onPress={() => {
              props.navigation.goBack();
            }}
          />
        </SafeAreaView>
        <View style={STYLES.container}>
          <ScrollView
            style={styles.scroll}
            scrollEventThrottle={16}
            keyboardShouldPersistTaps="handled">
            <View style={styles.wrapper}>
              {content === 'login' ? (
                <>
                  <Login />
                  <View style={styles.footer}>
                    <Link
                      title={LangModel.rk('Забыли пароль?')}
                      onPress={() => {
                        setContent('recovery');
                      }}
                    />
                    <View style={styles.regContent}>
                      <Text style={styles.regTitle}>
                        {LangModel.rk('Нет учетной записи?')}{' '}
                      </Text>
                      <Link
                        title={LangModel.rk('Регистрация')}
                        onPress={() => {
                          setContent('reg');
                        }}
                      />
                    </View>
                  </View>
                </>
              ) : content === 'reg' ? (
                <>
                  <Reg />
                  <View style={styles.regContent}>
                    <Text style={styles.regTitle}>
                      {LangModel.rk('Есть аккаунт?')}{' '}
                    </Text>
                    <Link
                      title={LangModel.rk('Войти')}
                      onPress={() => {
                        setContent('login');
                      }}
                    />
                  </View>
                </>
              ) : (
                <>
                  <Recovery />
                  <View style={styles.regContent}>
                    <Text style={styles.regTitle}>
                      {LangModel.rk('Есть аккаунт?')}{' '}
                    </Text>
                    <Link
                      title={LangModel.rk('Войти')}
                      onPress={() => {
                        setContent('login');
                      }}
                    />
                  </View>
                </>
              )}
            </View>
            <View style={styles.scrollFooter} />
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
    </>
  );
});

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: CONSTANTS.paddingContent,
    alignItems: 'center',
    justifyContent: 'flex-end',
    flex: 1,
  },

  scroll: {
    paddingTop: 80,
  },

  scrollFooter: {
    height: 100,
  },

  title: {
    marginTop: 16,
    marginBottom: 8,
  },
  form: {
    marginTop: 28,
    width: '100%',
  },

  footer: {
    alignItems: 'center',
    marginTop: 20,
  },

  regContent: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 20,
  },

  regTitle: {
    fontSize: CONSTANTS.sizeM,
  },

  close: {
    position: 'absolute',
    right: 20,
    zIndex: 1,
  },
});
