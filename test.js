Event = function (name, type) {
  this.name = name;
  this.type = type;
};
Event.TYPE_KEY_EVENT = 0;
Event.TYPE_STB_EVENT = 1;

var KeyEvent = new (function () {
  // "......"
  this.DELETE_KEY = new Event("Delete Key", Event.TYPE_KEY_EVENT);
  // "......" B
  this.BACK_KEY = new Event("Back Key", Event.TYPE_KEY_EVENT);
  // "......"
  this.OK_KEY = new Event("OK Key", Event.TYPE_KEY_EVENT);
  // "..."
  this.LEFT_KEY = new Event("Left Key", Event.TYPE_KEY_EVENT);
  // "..."
  this.RIGHT_KEY = new Event("Right Key", Event.TYPE_KEY_EVENT);
  // "..."
  this.UP_KEY = new Event("Up Key", Event.TYPE_KEY_EVENT);
  // "..."
  this.DOWN_KEY = new Event("Down Key", Event.TYPE_KEY_EVENT);
  // "........." <
  this.PAGEUP_KEY = new Event("PageUp Key", Event.TYPE_KEY_EVENT);
  // "........." >
  this.PAGEDOWN_KEY = new Event("PageDown Key", Event.TYPE_KEY_EVENT);

  // "......"
  this.NUMERIC_KEY = new Event("Numeric Key", Event.TYPE_KEY_EVENT);

  this.ZERO_KEY = new Event("Zero Key", Event.TYPE_KEY_EVENT);

  this.ONE_KEY = new Event("One Key", Event.TYPE_KEY_EVENT);

  this.TWO_KEY = new Event("Two Key", Event.TYPE_KEY_EVENT);

  this.THREE_KEY = new Event("Three Key", Event.TYPE_KEY_EVENT);

  this.FOUR_KEY = new Event("Four Key", Event.TYPE_KEY_EVENT);

  this.FIVE_KEY = new Event("Five Key", Event.TYPE_KEY_EVENT);

  this.SIX_KEY = new Event("Six Key", Event.TYPE_KEY_EVENT);

  this.SEVEN_KEY = new Event("Seven Key", Event.TYPE_KEY_EVENT);

  this.EIGHT_KEY = new Event("Eight Key", Event.TYPE_KEY_EVENT);

  this.NINE_KEY = new Event("Nine Key", Event.TYPE_KEY_EVENT);
  // "#,..............." [
  this.POUND_KEY = new Event("Pound Key", Event.TYPE_KEY_EVENT);
  // "*" ]
  this.STAR_KEY = new Event("Star Key", Event.TYPE_KEY_EVENT);

  // "......" Shift
  this.FFWD_KEY = new Event("FFWD", Event.TYPE_KEY_EVENT);
  // "......" Ctrl
  this.FBWD_KEY = new Event("FBWD", Event.TYPE_KEY_EVENT);
  // "........."
  this.CHANNELUP_KEY = new Event("ChannelUp Key", Event.TYPE_KEY_EVENT);
  // "........."
  this.CHANNELDOWN_KEY = new Event("ChannelDown Key", Event.TYPE_KEY_EVENT);
  // "........."
  this.VOLUMEUP_KEY = new Event("VolumeUp Key", Event.TYPE_KEY_EVENT);
  // "........."
  this.VOLUMEDOWN_KEY = new Event("VolumeDown Key", Event.TYPE_KEY_EVENT);
  // "......" K
  this.SILENT_KEY = new Event("Silent Key", Event.TYPE_KEY_EVENT);
  // "......" D
  this.AUDIOTRACK_KEY = new Event("AudioTrack Key", Event.TYPE_KEY_EVENT);
  // ...... `
  this.PAUSEPLAY_KEY = new Event("PausePlay Key", Event.TYPE_KEY_EVENT);
  // ......
  this.STOP_KEY = new Event("Stop Key", Event.TYPE_KEY_EVENT);
  // "......" A
  this.AUDIOCHANNEL_KEY = new Event("AudioChannel Key", Event.TYPE_KEY_EVENT);
  // "......" P
  this.SUBTITLE_KEY = new Event("Subtitle Key", Event.TYPE_KEY_EVENT);

  // "......" A
  this.RED_KEY = new Event("Red Key", Event.TYPE_KEY_EVENT);
  // "......" S
  this.GREEN_KEY = new Event("Green Key", Event.TYPE_KEY_EVENT);
  // "......" D
  this.YELLOW_KEY = new Event("Yellow Key", Event.TYPE_KEY_EVENT);
  // "......" F
  this.BLUE_KEY = new Event("Blue Key", Event.TYPE_KEY_EVENT);
  // "......"
  this.POSITION_KEY = new Event("Position Key", Event.TYPE_KEY_EVENT);
  // "......"
  this.SWITCH_KEY = new Event("Switch Key", Event.TYPE_KEY_EVENT);
  // "........."
  this.FAVOURITE_KEY = new Event("Favourite Key", Event.TYPE_KEY_EVENT);
  // "......" [
  this.HELP_KEY = new Event("Help Key", Event.TYPE_KEY_EVENT);

  // "......" I
  this.INFO_KEY = new Event("Info Key", Event.TYPE_KEY_EVENT);
  // "......" T
  this.SEARCH_KEY = new Event("Search Key", Event.TYPE_KEY_EVENT);
  // "Guide" Q
  this.BTV_KEY = new Event("Btv Key", Event.TYPE_KEY_EVENT);
  // "VOD" V
  this.VOD_KEY = new Event("Vod Key", Event.TYPE_KEY_EVENT);
  // "......"
  this.TVOD_KEY = new Event("TVod Key", Event.TYPE_KEY_EVENT);
  // "......"
  this.COMM_KEY = new Event("Comm Key", Event.TYPE_KEY_EVENT);
  // "......"
  this.NVOD_KEY = new Event("NVod Key", Event.TYPE_KEY_EVENT);
  // "........."
  this.UNDERLINE_KEY = new Event("Underline Key", Event.TYPE_KEY_EVENT);

  // "F1"
  this.F1_KEY = new Event("F1 Key", Event.TYPE_KEY_EVENT);
  // "F2"
  this.F2_KEY = new Event("F2 Key", Event.TYPE_KEY_EVENT);
  // "F3"
  this.F3_KEY = new Event("F3 Key", Event.TYPE_KEY_EVENT);
  // "F4"
  this.F4_KEY = new Event("F4 Key", Event.TYPE_KEY_EVENT);
  // .....................
  this.NULL_KEY = new Event("Null Key", Event.TYPE_KEY_EVENT);
  // "............"
  this.VOICE_KEY = new Event("Voice Key", Event.TYPE_KEY_EVENT);
  //OPTION...
  this.OPTION_KEY = new Event("OPTION Key", Event.TYPE_KEY_EVENT);
  //............
  this.KEYLAST_KEY = new Event("KEYLAST_KEY", Event.TYPE_KEY_EVENT);
  //PIP
  this.PIP_KEY = new Event("PIP_KEY", Event.TYPE_KEY_EVENT);
  //............
  this.MULTIVIEW_KEY = new Event("MULTIVIEW_KEY", Event.TYPE_KEY_EVENT);

  //......
  this.FAVORITE_KEY = new Event("FAVORITE_KEY", Event.TYPE_KEY_EVENT);

  // .........
  this.MENU_KEY = new Event("Menu Key", Event.TYPE_KEY_EVENT);
})();

var STBEvent = new (function () {
  // .....................
  this.KEY_IPTV_EVENT = new Event("Common STB Event", Event.TYPE_STB_EVENT);
  // ..................
  this.PREVIEW_TIME_END = new Event(
    "Preview time end Event",
    Event.TYPE_STB_EVENT
  );
  // ............
  this.EVENT_MEDIA_ERROR = new Event("Media error Event", Event.TYPE_STB_EVENT);
  // ..................
  this.EVENT_MEDIA_END = new Event("Media end Event", Event.TYPE_STB_EVENT);
  // ..................
  this.EVENT_MEDIA_BEGINING = new Event(
    "Media begining Event",
    Event.TYPE_STB_EVENT
  );
  // ..................
  this.EVENT_PLAYMODE_CHANGE = new Event(
    "Play mode change Event",
    Event.TYPE_STB_EVENT
  );
  // ..................
  this.EVENT_PLTVMODE_CHANGE = new Event(
    "Pltv mode change Event",
    Event.TYPE_STB_EVENT
  );
  // ............
  this.EVENT_GO_CHANNEL = new Event("go to Channel", Event.TYPE_STB_EVENT);
  // PPV............
  this.EVENT_PPV_REMINDER_END = new Event("ppv end", Event.TYPE_STB_EVENT);
  // ............
  this.EVENT_MEDIA_RECONNECT = new Event(
    "stb need reconnect",
    Event.TYPE_STB_EVENT
  );
  // ...............
  this.EVENT_CHANNEL_LIST_TAMPERED = new Event(
    "Channel list tampered",
    Event.TYPE_STB_EVENT
  );
  // CA......
  this.EVENT_ERROR_CA = new Event("CA Error", Event.TYPE_STB_EVENT);
  // PPV......
  this.EVENT_PPV_START = new Event("PPV Start", Event.TYPE_STB_EVENT);
  // PPV......
  this.EVENT_PPV_REMINDER_END = new Event(
    "PPV reminder end",
    Event.TYPE_STB_EVENT
  );
  // ......Reminder......
  this.EVENT_UNIVERSAL_REMINDER = new Event(
    "Universal Reminder",
    Event.TYPE_STB_EVENT
  );
  // .....................
  this.EVENT_NEW_VERSION = new Event("STB new version", Event.TYPE_STB_EVENT);
  // .....................
  this.EVENT_STB_HEARTBEAT = new Event("STB heartbeat", Event.TYPE_STB_EVENT);
  // ............
  this.EVENT_STB_ERROR = new Event("STB error", Event.TYPE_STB_EVENT);
  // ..................
  this.EVENT_STB_RESTORE = new Event("STB restore", Event.TYPE_STB_EVENT);
  // TVMS......
  this.EVENT_TVMS = new Event("TVMS", Event.TYPE_STB_EVENT);
  // ...............
  this.EVENT_POWEROFF_WAKEUP = new Event(
    "PowerOff wake up",
    Event.TYPE_STB_EVENT
  );
  // PAD............
  this.EVENT_CONTROL_SYNCTOSCREEN = new Event(
    "Pad sync to screen",
    Event.TYPE_STB_EVENT
  );
})();

(function () {
  var globalKeyTable = `<?xml version='1.0'?>
    <global_keytable>
      <response_define>
          <key_name>KEY_PORTAL</key_name>
          <response_type>1</response_type>
      </response_define>
    </global_keytable>`;
  Utility.setValueByName("GlobalKeyTable", globalKeyTable);
  Utility.setValueByName("Key.HomeKeyToEpg", "1");
})();
