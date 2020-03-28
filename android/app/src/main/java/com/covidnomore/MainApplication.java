package com.covidnomore;

import android.app.Application;

import com.facebook.react.ReactApplication;
import com.dieam.reactnativepushnotification.ReactNativePushNotificationPackage;
import com.horcrux.svg.SvgPackage;
import com.learnium.RNDeviceInfo.RNDeviceInfo;
import com.reactnativecommunity.asyncstorage.AsyncStoragePackage;
import com.oblador.vectoricons.VectorIconsPackage;
import com.lugg.ReactNativeConfig.ReactNativeConfigPackage;
import com.swmansion.gesturehandler.react.RNGestureHandlerPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;
import com.reactnativecommunity.netinfo.NetInfoPackage;
import com.th3rdwave.safeareacontext.SafeAreaContextPackage;

import com.crashlytics.android.Crashlytics;
import com.reactcommunity.rnlocalize.RNLocalizePackage;
import com.actionsheet.ActionSheetPackage;
import com.apsl.versionnumber.RNVersionNumberPackage;
import com.BV.LinearGradient.LinearGradientPackage;

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
            new ReactNativePushNotificationPackage(),
            new SvgPackage(),
            new RNDeviceInfo(),
            new AsyncStoragePackage(),
            new VectorIconsPackage(),
            new ReactNativeConfigPackage(),
            new RNGestureHandlerPackage(),
            new NetInfoPackage(),
            new RNLocalizePackage(),
            new ActionSheetPackage(),
            new RNVersionNumberPackage(),
            new LinearGradientPackage(),
             new SafeAreaContextPackage()
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
