import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {Container} from 'components/Layout/Container';
import {CategoryModel} from 'models';
import {ICategory, IScreenProps} from 'utils/Interfaces';
import {observer} from 'mobx-react';
import {Link} from 'components';
import {CONSTANTS} from 'utils/Constants';
import {COLORS} from 'styles/Colors';

export const CatalogScreen = observer((props: IScreenProps) => {
  const categories = props.route.params?.categories;

  React.useEffect(() => {
    CategoryModel.getCategories();
  }, []);

  const renderItem = ({item}: {item: ICategory}) => {
    return (
      <Link
        containerStyle={styles.category}
        title={item.name}
        onPress={() => {
          if (item.children && item.children.length) {
            props.navigation.push('Catalog', {
              categories: item.children,
              title: item.name,
            });
          } else {
            props.navigation.push('ProductList', {title: item.name});
          }
        }}
      />
    );
  };

  return (
    <Container>
      <FlatList
        data={categories || CategoryModel.categories}
        renderItem={renderItem}
      />
    </Container>
  );
});

const styles = StyleSheet.create({
  category: {
    height: 60,
    justifyContent: 'center',
    paddingLeft: CONSTANTS.paddingContent,
    borderBottomColor: COLORS.greyLight,
    borderBottomWidth: 1,
  },
});
