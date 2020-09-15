import React from 'react';
import {IScreenProps} from 'utils/Interfaces';
import {HeaderList, List} from 'components/Products';
import {Container} from 'components/Layout/Container';
import {Dimensions, ScrollView, StyleSheet, Image, View} from 'react-native';
import {LangModel} from 'models';
import {CategoriesList, Icons, Search, Slider, Text} from 'components';
import {CONSTANTS} from 'utils/Constants';
import {STYLES} from 'styles/Theme';
import {COLORS} from 'styles/Colors';

export function HomeScreen(props: IScreenProps) {
  React.useEffect(() => {
    //props.navigation.navigate('Login');
  }, [props.navigation]);

  return (
    <Container>
      <ScrollView stickyHeaderIndices={[0]}>
        <View style={{backgroundColor: COLORS.backgroundColor}}>
          <View style={STYLES.flex}>
            <View style={[STYLES.flexRow, STYLES.contentCenter]}>
              <Search style={[STYLES.flex, STYLES.paddingHorizontal]} />
              <View style={{paddingRight: CONSTANTS.paddingContent}}>
                <Icons.Cart />
              </View>
            </View>
          </View>
          <View style={STYLES.delimiter24} />
          <View style={STYLES.hr} />
        </View>
        <View style={STYLES.delimiter24} />

        <Slider>
          {[1, 2, 4].map(() => {
            return (
              <View>
                <Image
                  source={require('assets/images/sliderHome.png')}
                  style={styles.image}
                />
                <View style={styles.sliderContent}>
                  <Text
                    text="Super Flash Sale 50% Off"
                    style={styles.sliderText}
                  />
                </View>
              </View>
            );
          })}
        </Slider>
        <View>
          <HeaderList title="Категории" />
          <CategoriesList />
        </View>
        <View style={STYLES.delimiter24} />
        <List
          numColumns={2.2}
          horizontal
          headerTitle={LangModel.rk('Новинки')}
          onPressHeaderMore={() => {
            props.navigation.push('ProductList', {
              title: LangModel.rk('Новинки'),
              type: 'latest',
            });
          }}
        />
        <List
          numColumns={2.2}
          horizontal
          headerTitle={LangModel.rk('Акции')}
          onPressHeaderMore={() => {
            props.navigation.push('ProductList', {
              title: LangModel.rk('Акции'),
              type: 'action',
            });
          }}
        />
        <View style={STYLES.delimiterSmall} />
        <View style={STYLES.contentCenter}>
          <View>
            <Image
              source={require('assets/images/image51.png')}
              style={[styles.image]}
            />
            <View style={[styles.sliderContent, STYLES.spaceBetween]}>
              <Text text="Recomended" style={styles.sliderText} />
              <Text text="Product" style={styles.sliderText} />
              <View style={STYLES.delimiter24} />
              <Text
                text="We recommend the best for you"
                style={[styles.sliderText, STYLES.textM]}
              />
            </View>
          </View>
        </View>
        <View style={STYLES.delimiter24} />
        <List numColumns={2} />
      </ScrollView>
    </Container>
  );
}

const styles = StyleSheet.create({
  image: {
    width: Dimensions.get('window').width - CONSTANTS.paddingContent * 2,
    height: 200,
    resizeMode: 'cover',
    borderRadius: 8,
  },
  sliderContent: {
    position: 'absolute',
    left: 20,
    top: 30,
  },
  sliderText: {
    fontSize: CONSTANTS.sizeXXL,
    color: 'white',
    fontWeight: 'bold',
  },
});
