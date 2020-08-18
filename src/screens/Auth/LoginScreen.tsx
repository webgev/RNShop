import React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import {Icons, Input, Button, Link} from 'components';
import {COLORS} from 'styles/Colors';
import {CONSTANTS, STYLES} from 'styles/Theme';
import {observer} from 'mobx-react';
import {LangModel} from 'models';

export const LoginScreen = observer(function () {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <Icons.Logo />
        <Text style={[STYLES.title, styles.title]}>
          {LangModel.rk('Добро пожаловать в RNShop')}
        </Text>
        <Text style={STYLES.span}>
          {LangModel.rk('Войдите, чтобы продолжить')}
        </Text>
        <View style={styles.form}>
          <Input
            placeholder={LangModel.rk('Почта')}
            leftContent={<Icons.Email />}
          />
          <View style={STYLES.delimiterSmall} />
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

          <View style={styles.footer}>
            <Link
              title={LangModel.rk('Забыли пароль?')}
              onPress={() => {
                LangModel.changeLang('ru');
              }}
            />
            <View style={styles.regContent}>
              <Text style={styles.regTitle}>
                {LangModel.rk('Нет учетной записи?')}{' '}
              </Text>
              <Link
                title={LangModel.rk('Регистрация')}
                onPress={() => {
                  LangModel.changeLang('ru');
                }}
              />
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.backgroundColor,
  },

  wrapper: {
    paddingHorizontal: CONSTANTS.paddingContent,
    flex: 1,
    alignItems: 'center',
    paddingTop: 80,
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
});
