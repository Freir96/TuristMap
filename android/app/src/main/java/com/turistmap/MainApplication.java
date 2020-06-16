package com.turistmap;

import android.app.Application;

import com.facebook.react.ReactApplication;
import com.github.douglasjunior.reactNativeGetLocation.ReactNativeGetLocationPackage;
import com.henninghall.date_picker.DatePickerPackage;
import com.BV.LinearGradient.LinearGradientPackage;
import com.reactnativecommunity.viewpager.RNCViewPagerPackage;
import com.learnium.RNDeviceInfo.RNDeviceInfo;
import com.swmansion.rnscreens.RNScreensPackage;
import com.swmansion.reanimated.ReanimatedPackage;
//import com.psykar.cookiemanager.CookieManagerPackage;
import com.rnfs.RNFSPackage;
import io.realm.react.RealmReactPackage;
import com.oblador.vectoricons.VectorIconsPackage;
import com.smarkets.paypal.RNPaypalPackage;
import com.babisoft.ReactNativeLocalization.ReactNativeLocalizationPackage;
import com.swmansion.gesturehandler.react.RNGestureHandlerPackage;
//import com.inprogress.reactnativeyoutube.ReactNativeYouTube;
import com.airbnb.android.react.maps.MapsPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;
import com.AlexanderZaytsev.RNI18n.RNI18nPackage;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
            new ReactNativeGetLocationPackage(),
            new DatePickerPackage(),
            new LinearGradientPackage(),
            new RNCViewPagerPackage(),
            new RNDeviceInfo(),
            new RNScreensPackage(),
            new ReanimatedPackage(),
            //new CookieManagerPackage(),
            new RNFSPackage(),
            new RealmReactPackage(),
            new VectorIconsPackage(),
            new RNPaypalPackage(),
            new ReactNativeLocalizationPackage(),
            new RNGestureHandlerPackage(),
            //new ReactNativeYouTube(),
            new MapsPackage(),
            new RNI18nPackage()
      );
    }

    @Override
    protected String getJSMainModuleName() {
      return "index";
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
  }
}
