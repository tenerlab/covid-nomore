package com.covidnomore;

import com.facebook.react.ReactActivity;
import android.os.Bundle;
public class MainActivity extends ReactActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
      super.onCreate(savedInstanceState);
      // setContentView(R.layout.activity_main);
    }

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "covidnomore";
    }
}
