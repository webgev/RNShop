import React from 'react';
import {StatusBar, View, ActivityIndicator, StyleSheet} from 'react-native';
import Router from 'navigation/Router';
import {AuthModel} from 'models';
import {EventRegister} from 'utils/Events';
import {COLORS} from 'styles/Colors';

const App = () => {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    AuthModel.init().finally(() => {
      setLoading(false);
    });
    const eventAuth = EventRegister.on('auth', () => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    });

    return eventAuth;
  }, []);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      {loading ? (
        <View style={styles.loading}>
          <ActivityIndicator size="large" />
        </View>
      ) : (
        <Router />
      )}
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.backgroundColor,
    flex: 1,
  },
  text: {
    color: COLORS.textColor,
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
