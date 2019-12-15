'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var t = require('technoidentity-utils');
var React = _interopDefault(require('react'));
var reactFontawesome = require('@fortawesome/react-fontawesome');
var freeSolidSvgIcons = require('@fortawesome/free-solid-svg-icons');

function classNames() {
  var draft = [];

  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  args.forEach(function (arg) {
    if (t.string.is(arg)) {
      if (arg !== '') {
        draft.push(arg);
      }
    } else if (t.UnknownArray.is(arg)) {
      var res = classNames.apply(void 0, arg);

      if (res !== '') {
        draft.push(res);
      }
    } else if (t.UnknownRecord.is(arg)) {
      t.keys(arg).forEach(function (key) {
        if (arg[key]) {
          draft.push(key);
        }
      });
    } else if (arg !== null && arg !== undefined) {
      throw new Error("classNames cannot handle " + arg);
    }
  });
  return draft.join(' ');
}

function component(spec, inner, displayName) {
  var Comp = function Comp(props) {
    t.assertCast(spec, props);
    return React.createElement(inner, props);
  }; // tslint:disable-next-line: no-object-mutation


  Comp.displayName = displayName;
  return Comp;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function textHelpersClasses(_ref) {
  var _classNames;

  var textColor = _ref.textColor,
      textBackgroundColor = _ref.textBackgroundColor,
      textSize = _ref.textSize,
      textAlignment = _ref.textAlignment,
      textTransformation = _ref.textTransformation,
      textWeight = _ref.textWeight,
      textResponsiveSize = _ref.textResponsiveSize,
      textResponsiveAlignment = _ref.textResponsiveAlignment;
  var cnSize = textResponsiveSize ? "is-size-" + textSize + "-" + textResponsiveSize : textSize ? "is-size-" + textSize : '';
  var cnAlignment = textResponsiveAlignment ? "has-text-" + textAlignment + "-" + textResponsiveAlignment : textAlignment ? "has-text-" + textAlignment : '';
  return classNames(cnSize, cnAlignment, (_classNames = {}, _classNames["has-text-" + textColor] = textColor, _classNames["has-background-" + textBackgroundColor] = textBackgroundColor, _classNames["has-text-weight-" + textWeight] = textWeight, _classNames["is-" + textTransformation] = textTransformation, _classNames["has-text-" + textResponsiveAlignment] = textResponsiveAlignment, _classNames));
}
function removeTextHelpers(props) {
  var textColor = props.textColor,
      textBackgroundColor = props.textBackgroundColor,
      textSize = props.textSize,
      textAlignment = props.textAlignment,
      textTransformation = props.textTransformation,
      textWeight = props.textWeight,
      textResponsiveSize = props.textResponsiveSize,
      textResponsiveAlignment = props.textResponsiveAlignment,
      result = _objectWithoutPropertiesLoose(props, ["textColor", "textBackgroundColor", "textSize", "textAlignment", "textTransformation", "textWeight", "textResponsiveSize", "textResponsiveAlignment"]);

  return result;
}

function commonHelpersClasses(_ref) {
  var _classNames;

  var floating = _ref.floating,
      marginLess = _ref.marginLess,
      paddingLess = _ref.paddingLess,
      clipped = _ref.clipped,
      radiusLess = _ref.radiusLess,
      shadowLess = _ref.shadowLess,
      unSelectable = _ref.unSelectable,
      invisible = _ref.invisible,
      srOnly = _ref.srOnly;
  return classNames((_classNames = {}, _classNames["is-" + floating] = floating, _classNames['is-marginless'] = marginLess, _classNames['is-paddingless'] = paddingLess, _classNames['is-clipped'] = clipped, _classNames['is-radiusless'] = radiusLess, _classNames['is-shadowless'] = shadowLess, _classNames['is-unselectable'] = unSelectable, _classNames['is-invisible'] = invisible, _classNames['is-sr-only'] = srOnly, _classNames));
} // TODO: Use io-ts to automate this


function removeCommonHelpers(props) {
  var floating = props.floating,
      marginLess = props.marginLess,
      paddingLess = props.paddingLess,
      clipped = props.clipped,
      radiusLess = props.radiusLess,
      shadowLess = props.shadowLess,
      unSelectable = props.unSelectable,
      invisible = props.invisible,
      srOnly = props.srOnly,
      result = _objectWithoutPropertiesLoose(props, ["floating", "marginLess", "paddingLess", "clipped", "radiusLess", "shadowLess", "unSelectable", "invisible", "srOnly"]);

  return result;
}

function responsiveClass(_ref2) {
  var display = _ref2.display,
      breakpoint = _ref2.breakpoint,
      responsiveVisibility = _ref2.responsiveVisibility;
  var hiddenClass = responsiveVisibility ? "-" + responsiveVisibility : '';
  var breakpointClass = breakpoint ? "-" + breakpoint : '';
  return display ? "" + display + hiddenClass + breakpointClass : '';
}

function removeResponsiveHelpers(props) {
  var display = props.display,
      breakpoint = props.breakpoint,
      responsiveVisibility = props.responsiveVisibility,
      result = _objectWithoutPropertiesLoose(props, ["display", "breakpoint", "responsiveVisibility"]);

  return result;
}

var helpersClasses = function helpersClasses(helpers) {
  return classNames(commonHelpersClasses(helpers), responsiveClass(helpers), textHelpersClasses(helpers));
};
var removeHelpers = function removeHelpers(props) {
  return removeCommonHelpers(removeResponsiveHelpers(removeTextHelpers(props)));
};
var classNamesHelper = function classNamesHelper(_ref3) {
  var className = _ref3.className,
      props = _objectWithoutPropertiesLoose(_ref3, ["className"]);

  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  return classNames.apply(void 0, args.concat([helpersClasses(props), className]));
};

function El(_ref) {
  var _ref$as = _ref.as,
      as = _ref$as === void 0 ? 'div' : _ref$as,
      className = _ref.className,
      props = _objectWithoutPropertiesLoose(_ref, ["as", "className"]);

  return React.createElement(as, _extends({}, removeHelpers(props), {
    className: className
  }));
}

// TODO: Is this really useful?
// tslint:disable-next-line: no-null-keyword
var Null = function Null() {
  return null;
};

function UncontrolledInner(args) {
  var defaultValue = args.defaultValue,
      Component = args.component,
      props = _objectWithoutPropertiesLoose(args, ["defaultValue", "component"]);

  var _React$useState = React.useState(defaultValue),
      value = _React$useState[0],
      set = _React$useState[1];

  return React.createElement(Component, Object.assign({}, props, {
    value: value,
    onChange: function onChange(evt) {
      set(evt.value);

      if (props.onChange) {
        props.onChange(evt);
      }
    }
  }));
}

function Uncontrolled(args) {
  var defaultValue = args.defaultValue,
      Component = args.component,
      props = _objectWithoutPropertiesLoose(args, ["defaultValue", "component"]);

  t.debug(!(props.value && !props.onChange && !props.readOnly), "'value' provided, but not 'onChange', make this component readOnly.");
  return props.value !== undefined ? React.createElement(Component, Object.assign({}, props)) : React.createElement(UncontrolledInner, Object.assign({}, args));
}

var controlClasses = function controlClasses(_ref) {
  var _classNames;

  var loading = _ref.loading,
      expanded = _ref.expanded,
      fullWidth = _ref.fullWidth,
      ctrlSize = _ref.ctrlSize,
      leftIcon = _ref.leftIcon,
      rightIcon = _ref.rightIcon;
  return classNames('control', (_classNames = {
    'is-loading': loading,
    'is-expanded': expanded,
    'is-fullwidth': fullWidth
  }, _classNames["is-" + ctrlSize] = ctrlSize, _classNames['has-icons-left'] = leftIcon, _classNames['has-icons-right'] = rightIcon, _classNames));
};
var removeControlHelpers = function removeControlHelpers(_ref2) {
  var loading = _ref2.loading,
      expanded = _ref2.expanded,
      fullWidth = _ref2.fullWidth,
      controlSize = _ref2.ctrlSize,
      leftIcon = _ref2.leftIcon,
      rightIcon = _ref2.rightIcon,
      noControl = _ref2.noControl,
      props = _objectWithoutPropertiesLoose(_ref2, ["loading", "expanded", "fullWidth", "ctrlSize", "leftIcon", "rightIcon", "noControl"]);

  return props;
};

function removeIconHelpers(props) {
  var leftIcon = props.leftIcon,
      rightIcon = props.rightIcon,
      iconSize = props.iconSize,
      result = _objectWithoutPropertiesLoose(props, ["leftIcon", "rightIcon", "iconSize"]);

  return result;
}

var ControlDiv = function ControlDiv(_ref) {
  var _ref$as = _ref.as,
      as = _ref$as === void 0 ? 'input' : _ref$as,
      className = _ref.className,
      children = _ref.children,
      props = _objectWithoutPropertiesLoose(_ref, ["as", "className", "children"]);

  return React.createElement(as, _extends({}, removeIconHelpers(removeControlHelpers(removeHelpers(props))), {
    className: className
  }), children);
};

var Box = function Box(_ref) {
  var children = _ref.children,
      props = _objectWithoutPropertiesLoose(_ref, ["children"]);

  return React.createElement(El, Object.assign({}, props, {
    className: classNamesHelper(props, 'box')
  }), children);
};

var Card = function Card(_ref) {
  var children = _ref.children,
      props = _objectWithoutPropertiesLoose(_ref, ["children"]);

  var classes = classNamesHelper(props, 'card');
  return React.createElement(El, Object.assign({}, props, {
    className: classes
  }), children);
};
var CardHeader = function CardHeader(_ref2) {
  var children = _ref2.children,
      props = _objectWithoutPropertiesLoose(_ref2, ["children"]);

  var classes = classNamesHelper(props, 'card-header');
  return React.createElement(El, Object.assign({
    as: "header"
  }, props, {
    className: classes
  }), children);
};
var CardHeaderTitle = function CardHeaderTitle(_ref3) {
  var _classNamesHelper;

  var alignment = _ref3.alignment,
      children = _ref3.children,
      props = _objectWithoutPropertiesLoose(_ref3, ["alignment", "children"]);

  var classes = classNamesHelper(props, 'card-header-title', (_classNamesHelper = {}, _classNamesHelper["is-" + alignment] = alignment, _classNamesHelper));
  return React.createElement(El, Object.assign({
    as: "p"
  }, props, {
    className: classes
  }), children);
};
var CardHeaderIcon = function CardHeaderIcon(_ref4) {
  var children = _ref4.children,
      props = _objectWithoutPropertiesLoose(_ref4, ["children"]);

  var classes = classNamesHelper(props, 'card-header-icon');
  return React.createElement(El, Object.assign({
    as: "a"
  }, props, {
    className: classes
  }), children);
};
var CardContent = function CardContent(_ref5) {
  var children = _ref5.children,
      props = _objectWithoutPropertiesLoose(_ref5, ["children"]);

  var classes = classNamesHelper(props, 'card-content');
  return React.createElement(El, Object.assign({}, props, {
    className: classes
  }), children);
};
var CardFooter = function CardFooter(_ref6) {
  var children = _ref6.children,
      props = _objectWithoutPropertiesLoose(_ref6, ["children"]);

  var classes = classNamesHelper(props, 'card-footer');
  return React.createElement(El, Object.assign({
    as: "footer"
  }, props, {
    className: classes
  }), children);
};
var CardFooterItem = function CardFooterItem(_ref7) {
  var children = _ref7.children,
      props = _objectWithoutPropertiesLoose(_ref7, ["children"]);

  var classes = classNamesHelper(props, 'card-footer-item');
  return React.createElement(El, Object.assign({}, props, {
    className: classes
  }), children);
};
var CardImage = function CardImage(_ref8) {
  var children = _ref8.children,
      props = _objectWithoutPropertiesLoose(_ref8, ["children"]);

  var classes = classNamesHelper(props, 'card-image');
  return React.createElement(El, Object.assign({}, props, {
    className: classes
  }), children);
};

var Content = function Content(_ref) {
  var _classNamesHelper;

  var size = _ref.size,
      children = _ref.children,
      props = _objectWithoutPropertiesLoose(_ref, ["size", "children"]);

  var classes = classNamesHelper(props, 'content', (_classNamesHelper = {}, _classNamesHelper["is-" + size] = size, _classNamesHelper));
  return React.createElement(El, Object.assign({}, props, {
    className: classes
  }), children);
};

var Delete = function Delete(_ref) {
  var _classNamesHelper;

  var size = _ref.size,
      props = _objectWithoutPropertiesLoose(_ref, ["size"]);

  var classes = classNamesHelper(props, 'delete', (_classNamesHelper = {}, _classNamesHelper["is-" + size] = size, _classNamesHelper));
  return React.createElement(El, Object.assign({
    as: "a"
  }, props, {
    className: classes
  }));
};

var Icon = function Icon(_ref) {
  var _classNamesHelper;

  var direction = _ref.direction,
      children = _ref.children,
      props = _objectWithoutPropertiesLoose(_ref, ["direction", "children"]);

  var classes = classNamesHelper(props, 'icon', (_classNamesHelper = {}, _classNamesHelper["is-" + direction] = direction, _classNamesHelper));
  return React.createElement(El, {
    as: "span",
    className: classes
  }, React.createElement(reactFontawesome.FontAwesomeIcon, Object.assign({}, removeHelpers(props)), children));
};

var Image = function Image(_ref) {
  var _classNames;

  var size = _ref.size,
      children = _ref.children,
      responsiveImageRatio = _ref.responsiveImageRatio,
      rounded = _ref.rounded,
      props = _objectWithoutPropertiesLoose(_ref, ["size", "children", "responsiveImageRatio", "rounded"]);

  var classes = classNames('image', (_classNames = {}, _classNames["is-" + size] = size, _classNames["is-" + responsiveImageRatio] = responsiveImageRatio, _classNames));
  var imgClasses = classNamesHelper(props, {
    'is-rounded': rounded
  });
  return React.createElement("figure", {
    className: classes
  }, React.createElement(El, Object.assign({
    as: "img"
  }, props, {
    className: imgClasses
  })));
};

var Message = function Message(_ref) {
  var _classNamesHelper;

  var size = _ref.size,
      variant = _ref.variant,
      children = _ref.children,
      props = _objectWithoutPropertiesLoose(_ref, ["size", "variant", "children"]);

  var classes = classNamesHelper(props, 'message', (_classNamesHelper = {}, _classNamesHelper["is-" + size] = size, _classNamesHelper["is-" + variant] = variant, _classNamesHelper));
  return React.createElement(El, Object.assign({
    as: "article"
  }, props, {
    className: classes
  }), children);
};
var MessageHeader = function MessageHeader(_ref2) {
  var children = _ref2.children,
      props = _objectWithoutPropertiesLoose(_ref2, ["children"]);

  var classes = classNamesHelper(props, 'message-header');
  return React.createElement(El, Object.assign({}, props, {
    className: classes
  }), children);
};
var MessageBody = function MessageBody(_ref3) {
  var children = _ref3.children,
      props = _objectWithoutPropertiesLoose(_ref3, ["children"]);

  var classes = classNamesHelper(props, 'message-body');
  return React.createElement(El, Object.assign({}, props, {
    className: classes
  }), children);
};

var Modal = function Modal(_ref) {
  var active = _ref.active,
      noClose = _ref.noClose,
      children = _ref.children,
      onModalClosed = _ref.onModalClosed,
      props = _objectWithoutPropertiesLoose(_ref, ["active", "noClose", "children", "onModalClosed"]);

  var classes = classNamesHelper(props, 'modal', 'is-active');

  if (active) {
    return React.createElement(El, Object.assign({}, props, {
      className: classes
    }), children, noClose ? '' : React.createElement(El, Object.assign({
      as: "button",
      onClick: onModalClosed
    }, props, {
      className: classNames('modal-close')
    })));
  }

  return React.createElement(Null, null);
};
var ModalCard = function ModalCard(_ref2) {
  var children = _ref2.children,
      props = _objectWithoutPropertiesLoose(_ref2, ["children"]);

  var classes = classNamesHelper(props, 'modal-card');
  return React.createElement(El, Object.assign({}, props, {
    className: classes
  }), children);
};
var ModalCardHead = function ModalCardHead(_ref3) {
  var children = _ref3.children,
      props = _objectWithoutPropertiesLoose(_ref3, ["children"]);

  var classes = classNamesHelper(props, 'modal-card-head');
  return React.createElement(El, Object.assign({
    as: "header"
  }, props, {
    className: classes
  }), children);
};
var ModalCardTitle = function ModalCardTitle(_ref4) {
  var children = _ref4.children,
      props = _objectWithoutPropertiesLoose(_ref4, ["children"]);

  var classes = classNamesHelper(props, 'modal-card-title');
  return React.createElement(El, Object.assign({
    as: "p"
  }, props, {
    className: classes
  }), children);
};
var ModalCardBody = function ModalCardBody(_ref5) {
  var children = _ref5.children,
      props = _objectWithoutPropertiesLoose(_ref5, ["children"]);

  var classes = classNamesHelper(props, 'modal-card-body');
  return React.createElement(El, Object.assign({
    as: "section"
  }, props, {
    className: classes
  }), children);
};
var ModalCardFoot = function ModalCardFoot(_ref6) {
  var children = _ref6.children,
      props = _objectWithoutPropertiesLoose(_ref6, ["children"]);

  var classes = classNamesHelper(props, 'modal-card-foot');
  return React.createElement(El, Object.assign({
    as: "footer"
  }, props, {
    className: classes
  }), children);
};
var ModalBackground = function ModalBackground(_ref7) {
  var props = _extends({}, _ref7);

  var classes = classNamesHelper(props, 'modal-background');
  return React.createElement(El, Object.assign({}, props, {
    className: classes
  }));
};
var ModalContent = function ModalContent(_ref8) {
  var children = _ref8.children,
      props = _objectWithoutPropertiesLoose(_ref8, ["children"]);

  var classes = classNamesHelper(props, 'modal-content');
  return React.createElement(El, Object.assign({}, props, {
    className: classes
  }), children);
};

var NavbarContext =
/*#__PURE__*/
React.createContext({});
var Navbar = function Navbar(_ref) {
  var _classNamesHelper;

  var variant = _ref.variant,
      modifier = _ref.modifier,
      children = _ref.children,
      props = _objectWithoutPropertiesLoose(_ref, ["variant", "modifier", "children"]);

  var _React$useState = React.useState(false),
      visible = _React$useState[0],
      setVisible = _React$useState[1];

  var classes = classNamesHelper(props, 'navbar', (_classNamesHelper = {}, _classNamesHelper["is-" + variant] = variant, _classNamesHelper["is-" + modifier] = modifier, _classNamesHelper));
  return React.createElement(NavbarContext.Provider, {
    value: {
      visible: visible,
      setVisible: setVisible
    }
  }, React.createElement(El, Object.assign({}, props, {
    className: classes
  }), children));
};
var NavbarBrand = function NavbarBrand(_ref2) {
  var children = _ref2.children,
      props = _objectWithoutPropertiesLoose(_ref2, ["children"]);

  return React.createElement(El, Object.assign({}, props, {
    className: classNamesHelper(props, 'navbar-brand')
  }), children);
};
var NavbarBurger = function NavbarBurger(_ref3) {
  var active = _ref3.active,
      children = _ref3.children,
      props = _objectWithoutPropertiesLoose(_ref3, ["active", "children"]);

  // const { visible, setVisible } = React.useContext(NavbarContext)
  var classes = classNamesHelper(props, 'navbar-burger', 'burger', {
    'is-active': active
  });
  return React.createElement(El, Object.assign({
    as: "a"
  }, props, {
    className: classes
  }), children);
};
var NavbarItem = function NavbarItem(_ref4) {
  var _classNamesHelper2;

  var href = _ref4.href,
      active = _ref4.active,
      as = _ref4.as,
      dropDown = _ref4.dropDown,
      dropUp = _ref4.dropUp,
      modifier = _ref4.modifier,
      children = _ref4.children,
      props = _objectWithoutPropertiesLoose(_ref4, ["href", "active", "as", "dropDown", "dropUp", "modifier", "children"]);

  var classes = classNamesHelper(props, 'navbar-item', (_classNamesHelper2 = {
    'is-active': active,
    'has-dropdown-up': dropUp,
    'has-dropdown': dropDown
  }, _classNamesHelper2["is-" + modifier] = modifier, _classNamesHelper2));
  return React.createElement(El, Object.assign({
    as: as,
    href: href
  }, props, {
    className: classes,
    role: "navigation",
    "aria-label": "main navigation"
  }), children);
};
var NavbarMenu = function NavbarMenu(_ref5) {
  var active = _ref5.active,
      children = _ref5.children,
      props = _objectWithoutPropertiesLoose(_ref5, ["active", "children"]);

  var _React$useContext = React.useContext(NavbarContext),
      visible = _React$useContext.visible,
      setVisible = _React$useContext.setVisible;

  var classes = classNamesHelper(props, 'navbar-menu', {
    'is-active': active || visible
  });
  return React.createElement(El, Object.assign({}, props, {
    className: classes,
    onClick: function onClick() {
      return setVisible && setVisible(!visible);
    }
  }), children);
};
var NavbarDropDown = function NavbarDropDown(_ref6) {
  var _classNamesHelper3;

  var boxed = _ref6.boxed,
      children = _ref6.children,
      props = _objectWithoutPropertiesLoose(_ref6, ["boxed", "children"]);

  var classes = classNamesHelper(props, 'navbar-dropdown', (_classNamesHelper3 = {}, _classNamesHelper3["is-boxed"] = boxed, _classNamesHelper3));
  return React.createElement(El, Object.assign({}, props, {
    className: classes
  }), children);
};
var NavbarLink = function NavbarLink(_ref7) {
  var _classNamesHelper4;

  var arrowLess = _ref7.arrowLess,
      children = _ref7.children,
      props = _objectWithoutPropertiesLoose(_ref7, ["arrowLess", "children"]);

  var classes = classNamesHelper(props, 'navbar-link', (_classNamesHelper4 = {}, _classNamesHelper4["is-arrowless"] = arrowLess, _classNamesHelper4));
  return React.createElement(El, Object.assign({
    as: "a"
  }, props, {
    className: classes
  }), children);
};
var NavbarStart = function NavbarStart(_ref8) {
  var children = _ref8.children,
      props = _objectWithoutPropertiesLoose(_ref8, ["children"]);

  return React.createElement(El, Object.assign({}, props, {
    className: classNamesHelper(props, 'navbar-start')
  }), children);
};
var NavbarEnd = function NavbarEnd(_ref9) {
  var children = _ref9.children,
      props = _objectWithoutPropertiesLoose(_ref9, ["children"]);

  return React.createElement(El, Object.assign({}, props, {
    className: classNamesHelper(props, 'navbar-end')
  }), children);
};
var NavbarDivider = function NavbarDivider(_ref10) {
  var children = _ref10.children,
      props = _objectWithoutPropertiesLoose(_ref10, ["children"]);

  return React.createElement(El, Object.assign({
    as: "hr"
  }, props, {
    className: classNamesHelper(props, 'navbar-divider')
  }), children);
};

var Notification = function Notification(_ref) {
  var _classNamesHelper;

  var variant = _ref.variant,
      children = _ref.children,
      props = _objectWithoutPropertiesLoose(_ref, ["variant", "children"]);

  var classes = classNamesHelper(props, 'notification', (_classNamesHelper = {}, _classNamesHelper["is-" + variant] = variant, _classNamesHelper));
  return React.createElement(El, Object.assign({}, props, {
    className: classes
  }), children);
};

var Ol = function Ol(_ref) {
  var _classNamesHelper;

  var modifier = _ref.modifier,
      children = _ref.children,
      props = _objectWithoutPropertiesLoose(_ref, ["modifier", "children"]);

  var classes = classNamesHelper(props, (_classNamesHelper = {}, _classNamesHelper["is-" + modifier] = modifier, _classNamesHelper));
  return React.createElement(El, Object.assign({
    as: "ol"
  }, props, {
    className: classes
  }), children);
};

var Panel = function Panel(_ref) {
  var children = _ref.children,
      props = _objectWithoutPropertiesLoose(_ref, ["children"]);

  var classes = classNamesHelper(props, 'panel');
  return React.createElement(El, Object.assign({
    as: "nav"
  }, props, {
    className: classes
  }), children);
};
var PanelHeading = function PanelHeading(_ref2) {
  var children = _ref2.children,
      props = _objectWithoutPropertiesLoose(_ref2, ["children"]);

  var classes = classNamesHelper(props, 'panel-heading');
  return React.createElement(El, Object.assign({
    as: "p"
  }, props, {
    className: classes
  }), children);
};
var PanelBlock = function PanelBlock(_ref3) {
  var children = _ref3.children,
      active = _ref3.active,
      wrapped = _ref3.wrapped,
      props = _objectWithoutPropertiesLoose(_ref3, ["children", "active", "wrapped"]);

  var classes = classNamesHelper(props, 'panel-block', {
    'is-active': active,
    'is-wrapped': wrapped
  });
  return React.createElement(El, Object.assign({}, props, {
    className: classes
  }), children);
};
var PanelIcon = function PanelIcon(_ref4) {
  var _classNamesHelper;

  var direction = _ref4.direction,
      children = _ref4.children,
      props = _objectWithoutPropertiesLoose(_ref4, ["direction", "children"]);

  var classes = classNamesHelper(props, 'panel-icon', (_classNamesHelper = {}, _classNamesHelper["is-" + direction] = direction, _classNamesHelper));
  return React.createElement(El, {
    as: "span",
    className: classes
  }, React.createElement(reactFontawesome.FontAwesomeIcon, Object.assign({}, removeHelpers(props)), children));
};
var PanelTabsItem = function PanelTabsItem(_ref5) {
  var active = _ref5.active,
      children = _ref5.children,
      props = _objectWithoutPropertiesLoose(_ref5, ["active", "children"]);

  var classes = classNamesHelper(props, {
    'is-active': active
  });
  return React.createElement(El, Object.assign({
    as: "a"
  }, props, {
    className: classes
  }), children);
};
var PanelTabs = function PanelTabs(_ref6) {
  var children = _ref6.children,
      props = _objectWithoutPropertiesLoose(_ref6, ["children"]);

  var classes = classNamesHelper(props, 'panel-tabs');
  return React.createElement(El, Object.assign({
    as: "p"
  }, props, {
    className: classes
  }), children);
};

var ProgressBar = function ProgressBar(_ref) {
  var _classNamesHelper;

  var size = _ref.size,
      variant = _ref.variant,
      children = _ref.children,
      max = _ref.max,
      value = _ref.value,
      props = _objectWithoutPropertiesLoose(_ref, ["size", "variant", "children", "max", "value"]);

  var classes = classNamesHelper(props, 'progress', (_classNamesHelper = {}, _classNamesHelper["is-" + size] = size, _classNamesHelper["is-" + variant] = variant, _classNamesHelper));
  return React.createElement(El, Object.assign({
    as: "progress"
  }, props, {
    className: classes,
    value: value,
    max: max
  }), children);
};

var SubTitle = function SubTitle(_ref) {
  var _classNamesHelper;

  var size = _ref.size,
      children = _ref.children,
      props = _objectWithoutPropertiesLoose(_ref, ["size", "children"]);

  var classes = classNamesHelper(props, 'subtitle', (_classNamesHelper = {}, _classNamesHelper["is-" + size] = size, _classNamesHelper));
  return React.createElement(El, Object.assign({
    as: "h1"
  }, props, {
    className: classes
  }), children);
};

var Table = function Table(_ref) {
  var children = _ref.children,
      bordered = _ref.bordered,
      striped = _ref.striped,
      narrow = _ref.narrow,
      hoverable = _ref.hoverable,
      fullWidth = _ref.fullWidth,
      props = _objectWithoutPropertiesLoose(_ref, ["children", "bordered", "striped", "narrow", "hoverable", "fullWidth"]);

  var classes = classNamesHelper(props, 'table', {
    'is-bordered': bordered,
    'is-striped': striped,
    'is-narrow': narrow,
    'is-hoverable': hoverable,
    'is-fullwidth': fullWidth
  });
  return React.createElement(El, Object.assign({
    as: "table"
  }, props, {
    className: classes
  }), children);
};
var TableHead = function TableHead(_ref2) {
  var children = _ref2.children,
      props = _objectWithoutPropertiesLoose(_ref2, ["children"]);

  var classes = classNamesHelper(props);
  return React.createElement(El, Object.assign({
    as: "thead"
  }, props, {
    className: classes
  }), children);
};
var TableBody = function TableBody(_ref3) {
  var children = _ref3.children,
      props = _objectWithoutPropertiesLoose(_ref3, ["children"]);

  var classes = classNamesHelper(props);
  return React.createElement(El, Object.assign({
    as: "tbody"
  }, props, {
    className: classes
  }), children);
};
var TableFoot = function TableFoot(_ref4) {
  var children = _ref4.children,
      props = _objectWithoutPropertiesLoose(_ref4, ["children"]);

  var classes = classNamesHelper(props);
  return React.createElement(El, Object.assign({
    as: "tfoot"
  }, props, {
    className: classes
  }), children);
};
var Tr = function Tr(_ref5) {
  var selected = _ref5.selected,
      children = _ref5.children,
      props = _objectWithoutPropertiesLoose(_ref5, ["selected", "children"]);

  var classes = classNamesHelper(props, 'tr', {
    'is-selected': selected
  });
  return React.createElement(El, Object.assign({
    as: "tr"
  }, props, {
    className: classes
  }), children);
};
var Th = function Th(_ref6) {
  var _classNamesHelper;

  var variant = _ref6.variant,
      selected = _ref6.selected,
      narrow = _ref6.narrow,
      children = _ref6.children,
      props = _objectWithoutPropertiesLoose(_ref6, ["variant", "selected", "narrow", "children"]);

  var classes = classNamesHelper(props, (_classNamesHelper = {}, _classNamesHelper["is-" + variant] = variant, _classNamesHelper['is-selected'] = selected, _classNamesHelper['is-narrow'] = narrow, _classNamesHelper));
  return React.createElement(El, Object.assign({
    as: "th"
  }, props, {
    className: classes
  }), children);
};
var Td = function Td(_ref7) {
  var _classNamesHelper2;

  var variant = _ref7.variant,
      selected = _ref7.selected,
      narrow = _ref7.narrow,
      children = _ref7.children,
      props = _objectWithoutPropertiesLoose(_ref7, ["variant", "selected", "narrow", "children"]);

  var classes = classNamesHelper(props, (_classNamesHelper2 = {}, _classNamesHelper2["is-" + variant] = variant, _classNamesHelper2['is-selected'] = selected, _classNamesHelper2['is-narrow'] = narrow, _classNamesHelper2));
  return React.createElement(El, Object.assign({
    as: "td"
  }, props, {
    className: classes
  }), children);
};

var Tag = function Tag(_ref) {
  var _classNamesHelper;

  var size = _ref.size,
      variant = _ref.variant,
      modifier = _ref.modifier,
      children = _ref.children,
      rounded = _ref.rounded,
      props = _objectWithoutPropertiesLoose(_ref, ["size", "variant", "modifier", "children", "rounded"]);

  var classes = classNamesHelper(props, 'tag', (_classNamesHelper = {}, _classNamesHelper["is-" + size] = size, _classNamesHelper["is-" + modifier] = modifier, _classNamesHelper["is-" + variant] = variant, _classNamesHelper["is-rounded"] = rounded, _classNamesHelper));
  return React.createElement(El, Object.assign({
    as: "span"
  }, props, {
    className: classes
  }), children);
};

var Tags = function Tags(_ref) {
  var _classNamesHelper;

  var alignment = _ref.alignment,
      addons = _ref.addons,
      children = _ref.children,
      props = _objectWithoutPropertiesLoose(_ref, ["alignment", "addons", "children"]);

  var classes = classNamesHelper(props, 'tags', (_classNamesHelper = {}, _classNamesHelper["is-" + alignment] = alignment, _classNamesHelper['has-addons'] = addons, _classNamesHelper));
  return React.createElement(El, Object.assign({}, props, {
    className: classes
  }), children);
};

var Text = function Text(_ref) {
  var as = _ref.as,
      children = _ref.children,
      color = _ref.color,
      backgroundColor = _ref.backgroundColor,
      alignment = _ref.alignment,
      transformation = _ref.transformation,
      weight = _ref.weight,
      responsiveSize = _ref.responsiveSize,
      responsiveAlignment = _ref.responsiveAlignment,
      props = _objectWithoutPropertiesLoose(_ref, ["as", "children", "color", "backgroundColor", "alignment", "transformation", "weight", "responsiveSize", "responsiveAlignment"]);

  // tslint:disable-next-line:typedef
  var localProps = _extends({
    textColor: color,
    textBackgroundColor: backgroundColor,
    textAlignment: alignment,
    textTransformation: transformation,
    textWeight: weight,
    textResponsiveSize: responsiveSize,
    textResponsiveAlignment: responsiveAlignment
  }, props);

  return React.createElement(El, Object.assign({
    as: as
  }, localProps, {
    className: classNamesHelper(localProps)
  }), children);
};

var Title = function Title(_ref) {
  var _classNamesHelper;

  var size = _ref.size,
      spaced = _ref.spaced,
      children = _ref.children,
      props = _objectWithoutPropertiesLoose(_ref, ["size", "spaced", "children"]);

  var classes = classNamesHelper(props, 'title', (_classNamesHelper = {}, _classNamesHelper["is-" + size] = size, _classNamesHelper['is-spaced'] = spaced, _classNamesHelper));
  return React.createElement(El, Object.assign({
    as: "h1"
  }, props, {
    className: classes
  }), children);
};

var ControlWrapper = function ControlWrapper(_ref) {
  var noControl = _ref.noControl,
      children = _ref.children,
      props = _objectWithoutPropertiesLoose(_ref, ["noControl", "children"]);

  return noControl ? React.createElement(React.Fragment, null, children) : React.createElement("div", {
    className: controlClasses(props)
  }, children, props.leftIcon && React.createElement(Icon, {
    icon: props.leftIcon,
    direction: "left"
  }), props.rightIcon && React.createElement(Icon, {
    icon: props.rightIcon,
    direction: "right"
  }));
};

var Button = function Button(_ref) {
  var _classNamesHelper;

  var _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'button' : _ref$type,
      variant = _ref.variant,
      size = _ref.size,
      state = _ref.state,
      fullWidth = _ref.fullWidth,
      rounded = _ref.rounded,
      inverted = _ref.inverted,
      outlined = _ref.outlined,
      children = _ref.children,
      props = _objectWithoutPropertiesLoose(_ref, ["type", "variant", "size", "state", "fullWidth", "rounded", "inverted", "outlined", "children"]);

  var classes = classNamesHelper(props, 'button', (_classNamesHelper = {}, _classNamesHelper["is-" + variant] = variant, _classNamesHelper["is-" + size] = size, _classNamesHelper["is-" + state] = state, _classNamesHelper['is-rounded'] = rounded, _classNamesHelper['is-inverted'] = inverted, _classNamesHelper['is-outlined'] = outlined, _classNamesHelper['is-fullwidth'] = fullWidth, _classNamesHelper));
  return React.createElement(ControlWrapper, Object.assign({}, props), React.createElement(ControlDiv, Object.assign({
    as: "button"
  }, props, {
    type: type,
    className: classes
  }), children));
};

var ButtonsGroup = function ButtonsGroup(_ref) {
  var _classNamesHelper;

  var addons = _ref.addons,
      alignment = _ref.alignment,
      children = _ref.children,
      size = _ref.size,
      props = _objectWithoutPropertiesLoose(_ref, ["addons", "alignment", "children", "size"]);

  var classes = classNamesHelper(props, 'buttons', (_classNamesHelper = {}, _classNamesHelper["is-" + alignment] = alignment, _classNamesHelper["has-" + addons] = addons, _classNamesHelper["are-" + size] = size, _classNamesHelper));
  return React.createElement(El, Object.assign({}, props, {
    className: classes
  }), children);
};

var CheckBox = function CheckBox(_ref) {
  var children = _ref.children,
      props = _objectWithoutPropertiesLoose(_ref, ["children"]);

  return React.createElement(ControlWrapper, Object.assign({}, props), React.createElement("label", {
    className: "checkbox"
  }, React.createElement(ControlDiv, Object.assign({}, props, {
    type: "checkbox",
    className: classNamesHelper(props, 'checkbox')
  })), children));
};

var Control = function Control(_ref) {
  var children = _ref.children,
      props = _objectWithoutPropertiesLoose(_ref, ["children"]);

  return React.createElement(ControlWrapper, Object.assign({}, props), children);
};

var Label = function Label(args) {
  var _classNamesHelper;

  var size = args.size,
      _args$as = args.as,
      as = _args$as === void 0 ? 'label' : _args$as,
      children = args.children,
      props = _objectWithoutPropertiesLoose(args, ["size", "as", "children"]);

  var classes = classNamesHelper(props, 'label', (_classNamesHelper = {}, _classNamesHelper["is-" + size] = size, _classNamesHelper));
  return React.createElement(El, Object.assign({
    as: as
  }, props, {
    className: classes
  }), children);
};

var Field = function Field(_ref) {
  var _classNamesHelper;

  var grouped = _ref.grouped,
      addons = _ref.addons,
      horizontal = _ref.horizontal,
      groupedMultiline = _ref.groupedMultiline,
      groupModifier = _ref.groupModifier,
      size = _ref.size,
      addonsModifier = _ref.addonsModifier,
      children = _ref.children,
      props = _objectWithoutPropertiesLoose(_ref, ["grouped", "addons", "horizontal", "groupedMultiline", "groupModifier", "size", "addonsModifier", "children"]);

  var classes = classNamesHelper(props, 'field', (_classNamesHelper = {
    'is-grouped': grouped || groupedMultiline || groupModifier,
    'is-horizontal': horizontal,
    'has-addons': addons || addonsModifier
  }, _classNamesHelper["is-" + size] = size, _classNamesHelper['is-grouped-multiline'] = groupedMultiline, _classNamesHelper["is-" + groupModifier] = groupModifier, _classNamesHelper["has-" + addonsModifier] = addonsModifier, _classNamesHelper));
  return React.createElement(El, Object.assign({}, props, {
    className: classes
  }), children);
};
var FieldBody = function FieldBody(_ref2) {
  var children = _ref2.children,
      props = _objectWithoutPropertiesLoose(_ref2, ["children"]);

  return React.createElement(El, Object.assign({}, props, {
    className: classNamesHelper(props, 'field-body')
  }), children);
};
var FieldHelp = function FieldHelp(_ref3) {
  var _classNamesHelper2;

  var variant = _ref3.variant,
      children = _ref3.children,
      props = _objectWithoutPropertiesLoose(_ref3, ["variant", "children"]);

  var classes = classNamesHelper(props, 'help', (_classNamesHelper2 = {}, _classNamesHelper2["is-" + variant] = variant, _classNamesHelper2));
  return React.createElement(El, Object.assign({
    as: "p"
  }, props, {
    className: classes
  }), children);
};
var FieldLabel = function FieldLabel(_ref4) {
  var _classNamesHelper3;

  var children = _ref4.children,
      fieldLabelSize = _ref4.fieldLabelSize,
      props = _objectWithoutPropertiesLoose(_ref4, ["children", "fieldLabelSize"]);

  var classes = classNamesHelper(props, 'field-label', (_classNamesHelper3 = {}, _classNamesHelper3["is-" + fieldLabelSize] = fieldLabelSize, _classNamesHelper3));
  return React.createElement(El, Object.assign({}, props, {
    className: classes
  }), React.createElement(Label, null, children));
};
var FormField = function FormField(_ref5) {
  var label = _ref5.label,
      labelSize = _ref5.labelSize,
      helpType = _ref5.helpType,
      helpText = _ref5.helpText,
      children = _ref5.children,
      props = _objectWithoutPropertiesLoose(_ref5, ["label", "labelSize", "helpType", "helpText", "children"]);

  return React.createElement(Field, Object.assign({}, props), React.createElement(Label, {
    size: labelSize
  }, label), children, React.createElement(FieldHelp, {
    variant: helpType
  }, helpText));
};

var File = function File(_ref) {
  var _classNamesHelper;

  var variant = _ref.variant,
      size = _ref.size,
      alignment = _ref.alignment,
      fullWidth = _ref.fullWidth,
      boxed = _ref.boxed,
      children = _ref.children,
      fileLabel = _ref.fileLabel,
      fileName = _ref.fileName,
      props = _objectWithoutPropertiesLoose(_ref, ["variant", "size", "alignment", "fullWidth", "boxed", "children", "fileLabel", "fileName"]);

  var classes = classNamesHelper(props, 'file', (_classNamesHelper = {}, _classNamesHelper["is-" + variant] = variant, _classNamesHelper["is-" + size] = size, _classNamesHelper["is-" + alignment] = alignment, _classNamesHelper['is-fullwidth'] = fullWidth, _classNamesHelper['is-boxed'] = boxed, _classNamesHelper['has-name'] = fileName, _classNamesHelper));
  return React.createElement("div", Object.assign({}, props, {
    className: classes
  }), React.createElement("label", {
    className: "file-label"
  }, React.createElement("input", {
    className: "file-input",
    type: "file"
  }), React.createElement("span", {
    className: "file-cta"
  }, React.createElement("span", {
    className: "file-icon"
  }, React.createElement(Icon, {
    icon: freeSolidSvgIcons.faUpload
  })), React.createElement("span", {
    className: "file-label"
  }, fileLabel)), fileName && React.createElement("span", {
    className: "file-name"
  }, children)));
};

var Input = function Input(_ref) {
  var _classNamesHelper;

  var variant = _ref.variant,
      fullWidth = _ref.fullWidth,
      inline = _ref.inline,
      rounded = _ref.rounded,
      state = _ref.state,
      props = _objectWithoutPropertiesLoose(_ref, ["variant", "fullWidth", "inline", "rounded", "state"]);

  var classes = classNamesHelper(props, 'input', (_classNamesHelper = {
    'is-fullwidth': fullWidth,
    'is-inline': inline,
    'is-rounded': rounded
  }, _classNamesHelper["is-" + variant] = variant, _classNamesHelper["is-" + props.ctrlSize] = props.ctrlSize, _classNamesHelper["is-" + state] = state, _classNamesHelper));
  return React.createElement(ControlWrapper, Object.assign({}, props), React.createElement(ControlDiv, Object.assign({}, props, {
    className: classes
  })));
};

var RadioGroupView = function RadioGroupView(_ref) {
  var name = _ref.name,
      selected = _ref.selected,
      readOnly = _ref.readOnly,
      _onChange = _ref.onChange,
      onBlur = _ref.onBlur,
      children = _ref.children,
      props = _objectWithoutPropertiesLoose(_ref, ["name", "selected", "readOnly", "onChange", "onBlur", "children"]);

  return React.createElement(ControlWrapper, Object.assign({}, props), React.Children.map(children, function (child, i) {
    // debug(
    //   child.type.displayName === 'Radio',
    //   "Every child to 'RadioGroup' must be 'Radio'",
    // )
    var _selected = selected || children && children[0] && children[0].props.value || '0';

    return React.cloneElement(child, {
      name: name,
      value: child.props.value || i.toString(),
      onBlur: onBlur,
      readOnly: readOnly,
      onChange: function onChange(evt) {
        if (_onChange) {
          _onChange({
            name: evt.currentTarget.name,
            value: evt.currentTarget.value
          });
        }
      },
      _selected: _selected
    });
  }));
};

function RadioGroupInner(_ref2) {
  var defaultValue = _ref2.defaultValue,
      children = _ref2.children,
      props = _objectWithoutPropertiesLoose(_ref2, ["defaultValue", "children"]);

  var _React$useState = React.useState(props.selected || defaultValue),
      value = _React$useState[0],
      set = _React$useState[1];

  return React.createElement(RadioGroupView, Object.assign({}, props, {
    selected: value,
    onChange: function onChange(_ref3) {
      var value = _ref3.value;
      return set(value);
    }
  }), children);
}

var RadioGroup = function RadioGroup(args) {
  var defaultValue = args.defaultValue,
      children = args.children,
      props = _objectWithoutPropertiesLoose(args, ["defaultValue", "children"]);

  t.debug(!(props.selected && !props.onChange && !props.readOnly), "For Radio " + props.name + " 'selected' provided, but not 'onChange', make this component readOnly.");
  return props.selected !== undefined ? React.createElement(RadioGroupView, Object.assign({}, props), children) : React.createElement(RadioGroupInner, Object.assign({}, args));
};
var Radio = function Radio(args) {
  var children = args.children,
      _selected = args._selected,
      props = _objectWithoutPropertiesLoose(args, ["children", "_selected"]);

  return React.createElement("label", {
    className: classNamesHelper(props, 'radio')
  }, React.createElement(El, Object.assign({
    as: "input"
  }, props, {
    checked: _selected === props.value,
    type: "radio"
  })), children);
};

var Select = function Select(_ref) {
  var _classNames, _classNamesHelper;

  var variant = _ref.variant,
      loading = _ref.loading,
      fullWidth = _ref.fullWidth,
      state = _ref.state,
      children = _ref.children,
      rounded = _ref.rounded,
      props = _objectWithoutPropertiesLoose(_ref, ["variant", "loading", "fullWidth", "state", "children", "rounded"]);

  var divClasses = classNames('select', (_classNames = {}, _classNames["is-" + variant] = variant, _classNames['is-loading'] = loading, _classNames['is-fullwidth'] = fullWidth, _classNames['is-rounded'] = rounded, _classNames["is-" + props.ctrlSize] = props.ctrlSize, _classNames));
  var classes = classNamesHelper(props, (_classNamesHelper = {}, _classNamesHelper["is-" + state] = state, _classNamesHelper));
  return React.createElement(ControlWrapper, Object.assign({}, props), React.createElement("div", {
    className: divClasses
  }, React.createElement(ControlDiv, Object.assign({
    as: "select"
  }, props, {
    className: classes
  }), children)));
};

var TextArea = function TextArea(_ref) {
  var _classNamesHelper;

  var variant = _ref.variant,
      size = _ref.size,
      fixedSize = _ref.fixedSize,
      fullWidth = _ref.fullWidth,
      inline = _ref.inline,
      rows = _ref.rows,
      state = _ref.state,
      props = _objectWithoutPropertiesLoose(_ref, ["variant", "size", "fixedSize", "fullWidth", "inline", "rows", "state"]);

  var classes = classNamesHelper(props, 'textarea', (_classNamesHelper = {}, _classNamesHelper["is-" + variant] = variant, _classNamesHelper["is-" + size] = size, _classNamesHelper['has-fixed-size'] = fixedSize, _classNamesHelper['is-fullwidth'] = fullWidth, _classNamesHelper['is-inline'] = inline, _classNamesHelper["is-" + props.ctrlSize] = props.ctrlSize, _classNamesHelper["is-" + state] = state, _classNamesHelper));
  return React.createElement(ControlWrapper, Object.assign({}, props), React.createElement(ControlDiv, Object.assign({
    as: "textarea"
  }, props, {
    className: classes,
    rows: rows
  })));
};

var getSizeResponsive = function getSizeResponsive(size, responsive) {
  if (size === undefined) {
    return '';
  }

  if (responsive === undefined) {
    return "is-" + size;
  }

  return "is-" + size + "-" + responsive;
};

var Column = function Column(_ref) {
  var _classNamesHelper;

  var size = _ref.size,
      gridSize = _ref.gridSize,
      offsetSize = _ref.offsetSize,
      narrow = _ref.narrow,
      responsive = _ref.responsive,
      children = _ref.children,
      props = _objectWithoutPropertiesLoose(_ref, ["size", "gridSize", "offsetSize", "narrow", "responsive", "children"]);

  var classes = classNamesHelper(props, 'column', getSizeResponsive(size, responsive), (_classNamesHelper = {}, _classNamesHelper["is-" + size] = size, _classNamesHelper["is-" + gridSize] = gridSize, _classNamesHelper["is-offset-" + offsetSize] = offsetSize, _classNamesHelper['is-narrow'] = narrow, _classNamesHelper));
  return React.createElement(El, Object.assign({}, props, {
    className: classes
  }), children);
};

var Columns = function Columns(_ref) {
  var _classNamesHelper;

  var children = _ref.children,
      responsiveness = _ref.responsiveness,
      gapless = _ref.gapLess,
      multiline = _ref.multiline,
      verticallyCentered = _ref.verticallyCentered,
      columnCentered = _ref.columnCentered,
      props = _objectWithoutPropertiesLoose(_ref, ["children", "responsiveness", "gapLess", "multiline", "verticallyCentered", "columnCentered"]);

  var classes = classNamesHelper(props, 'columns', (_classNamesHelper = {}, _classNamesHelper["is-" + responsiveness] = responsiveness, _classNamesHelper['is-gapless'] = gapless, _classNamesHelper['is-vcentered'] = verticallyCentered, _classNamesHelper['is-multiline'] = multiline, _classNamesHelper['is-centered'] = columnCentered, _classNamesHelper));
  return React.createElement(El, Object.assign({}, props, {
    className: classes
  }), children);
};

var Container = function Container(_ref) {
  var _classNamesHelper;

  var children = _ref.children,
      fluid = _ref.fluid,
      breakpoint = _ref.breakpoint,
      props = _objectWithoutPropertiesLoose(_ref, ["children", "fluid", "breakpoint"]);

  var classes = classNamesHelper(props, 'container', (_classNamesHelper = {
    'is-fluid': fluid
  }, _classNamesHelper["is-" + breakpoint] = breakpoint, _classNamesHelper));
  return React.createElement(El, Object.assign({}, props, {
    className: classes
  }), children);
};

var Footer = function Footer(_ref) {
  var children = _ref.children,
      props = _objectWithoutPropertiesLoose(_ref, ["children"]);

  return React.createElement(El, Object.assign({
    as: "footer"
  }, props, {
    className: classNamesHelper(props, 'footer')
  }), children);
};

var Hero = function Hero(_ref) {
  var _classNamesHelper;

  var children = _ref.children,
      variant = _ref.variant,
      bold = _ref.bold,
      size = _ref.size,
      props = _objectWithoutPropertiesLoose(_ref, ["children", "variant", "bold", "size"]);

  var classes = classNamesHelper(props, 'hero', (_classNamesHelper = {}, _classNamesHelper["is-" + variant] = variant, _classNamesHelper['is-bold'] = bold, _classNamesHelper["is-" + size] = size, _classNamesHelper));
  return React.createElement(El, Object.assign({
    as: "section"
  }, props, {
    className: classes
  }), children);
};
var HeroHead = function HeroHead(_ref2) {
  var children = _ref2.children,
      props = _objectWithoutPropertiesLoose(_ref2, ["children"]);

  return React.createElement(El, Object.assign({}, props, {
    className: classNamesHelper(props, 'hero-head')
  }), children);
};
var HeroBody = function HeroBody(_ref3) {
  var children = _ref3.children,
      props = _objectWithoutPropertiesLoose(_ref3, ["children"]);

  return React.createElement(El, Object.assign({}, props, {
    className: classNamesHelper(props, 'hero-body')
  }), children);
};
var HeroFoot = function HeroFoot(_ref4) {
  var children = _ref4.children,
      props = _objectWithoutPropertiesLoose(_ref4, ["children"]);

  return React.createElement(El, Object.assign({}, props, {
    className: classNamesHelper(props, 'hero-foot')
  }), children);
};

var Level = function Level(_ref) {
  var _classNamesHelper;

  var modifier = _ref.modifier,
      children = _ref.children,
      props = _objectWithoutPropertiesLoose(_ref, ["modifier", "children"]);

  var classes = classNamesHelper(props, 'level', (_classNamesHelper = {}, _classNamesHelper["is-" + modifier] = modifier, _classNamesHelper));
  return React.createElement(El, Object.assign({
    as: "nav"
  }, props, {
    className: classes
  }), children);
};
var LevelItem = function LevelItem(_ref2) {
  var _classNamesHelper2;

  var children = _ref2.children,
      direction = _ref2.direction,
      flexible = _ref2.flexible,
      props = _objectWithoutPropertiesLoose(_ref2, ["children", "direction", "flexible"]);

  var classes = classNamesHelper(props, 'level-item', (_classNamesHelper2 = {}, _classNamesHelper2["level-" + direction] = direction, _classNamesHelper2['is-flexible'] = flexible, _classNamesHelper2));
  return React.createElement(El, Object.assign({}, props, {
    className: classes
  }), children);
};

var Media = function Media(_ref) {
  var children = _ref.children,
      props = _objectWithoutPropertiesLoose(_ref, ["children"]);

  return React.createElement(El, Object.assign({
    as: "article"
  }, props, {
    className: classNamesHelper(props, 'media')
  }), children);
};
var MediaLeft = function MediaLeft(_ref2) {
  var children = _ref2.children,
      props = _objectWithoutPropertiesLoose(_ref2, ["children"]);

  return React.createElement(El, Object.assign({
    as: "figure"
  }, props, {
    className: classNamesHelper(props, 'media-left')
  }), children);
};
var MediaRight = function MediaRight(_ref3) {
  var children = _ref3.children,
      props = _objectWithoutPropertiesLoose(_ref3, ["children"]);

  return React.createElement(El, Object.assign({}, props, {
    className: classNamesHelper(props, 'media-right')
  }), children);
};
var MediaContent = function MediaContent(_ref4) {
  var children = _ref4.children,
      props = _objectWithoutPropertiesLoose(_ref4, ["children"]);

  return React.createElement(El, Object.assign({}, props, {
    className: classNamesHelper(props, 'media-content')
  }), children);
};

var Section = function Section(_ref) {
  var _classNamesHelper;

  var modifier = _ref.modifier,
      children = _ref.children,
      props = _objectWithoutPropertiesLoose(_ref, ["modifier", "children"]);

  var classes = classNamesHelper(props, 'section', (_classNamesHelper = {}, _classNamesHelper["is-" + modifier] = modifier, _classNamesHelper));
  return React.createElement(El, Object.assign({
    as: "section"
  }, props, {
    className: classes
  }), children);
};

var Tile = function Tile(_ref) {
  var _classNamesHelper;

  var tileType = _ref.tileType,
      children = _ref.children,
      size = _ref.size,
      vertical = _ref.vertical,
      variant = _ref.variant,
      notification = _ref.notification,
      box = _ref.box,
      props = _objectWithoutPropertiesLoose(_ref, ["tileType", "children", "size", "vertical", "variant", "notification", "box"]);

  var classes = classNamesHelper(props, 'tile', (_classNamesHelper = {}, _classNamesHelper["is-" + tileType] = tileType, _classNamesHelper["is-" + size] = size, _classNamesHelper['is-vertical'] = vertical, _classNamesHelper["is-" + variant] = variant, _classNamesHelper.notification = notification, _classNamesHelper.box = box, _classNamesHelper));
  return React.createElement(El, Object.assign({}, props, {
    className: classes
  }), children);
};

exports.Box = Box;
exports.Button = Button;
exports.ButtonsGroup = ButtonsGroup;
exports.Card = Card;
exports.CardContent = CardContent;
exports.CardFooter = CardFooter;
exports.CardFooterItem = CardFooterItem;
exports.CardHeader = CardHeader;
exports.CardHeaderIcon = CardHeaderIcon;
exports.CardHeaderTitle = CardHeaderTitle;
exports.CardImage = CardImage;
exports.CheckBox = CheckBox;
exports.Column = Column;
exports.Columns = Columns;
exports.Container = Container;
exports.Content = Content;
exports.Control = Control;
exports.ControlDiv = ControlDiv;
exports.ControlWrapper = ControlWrapper;
exports.Delete = Delete;
exports.El = El;
exports.Field = Field;
exports.FieldBody = FieldBody;
exports.FieldHelp = FieldHelp;
exports.FieldLabel = FieldLabel;
exports.File = File;
exports.Footer = Footer;
exports.FormField = FormField;
exports.Hero = Hero;
exports.HeroBody = HeroBody;
exports.HeroFoot = HeroFoot;
exports.HeroHead = HeroHead;
exports.Icon = Icon;
exports.Image = Image;
exports.Input = Input;
exports.Label = Label;
exports.Level = Level;
exports.LevelItem = LevelItem;
exports.Media = Media;
exports.MediaContent = MediaContent;
exports.MediaLeft = MediaLeft;
exports.MediaRight = MediaRight;
exports.Message = Message;
exports.MessageBody = MessageBody;
exports.MessageHeader = MessageHeader;
exports.Modal = Modal;
exports.ModalBackground = ModalBackground;
exports.ModalCard = ModalCard;
exports.ModalCardBody = ModalCardBody;
exports.ModalCardFoot = ModalCardFoot;
exports.ModalCardHead = ModalCardHead;
exports.ModalCardTitle = ModalCardTitle;
exports.ModalContent = ModalContent;
exports.Navbar = Navbar;
exports.NavbarBrand = NavbarBrand;
exports.NavbarBurger = NavbarBurger;
exports.NavbarDivider = NavbarDivider;
exports.NavbarDropDown = NavbarDropDown;
exports.NavbarEnd = NavbarEnd;
exports.NavbarItem = NavbarItem;
exports.NavbarLink = NavbarLink;
exports.NavbarMenu = NavbarMenu;
exports.NavbarStart = NavbarStart;
exports.Notification = Notification;
exports.Null = Null;
exports.Ol = Ol;
exports.Panel = Panel;
exports.PanelBlock = PanelBlock;
exports.PanelHeading = PanelHeading;
exports.PanelIcon = PanelIcon;
exports.PanelTabs = PanelTabs;
exports.PanelTabsItem = PanelTabsItem;
exports.ProgressBar = ProgressBar;
exports.Radio = Radio;
exports.RadioGroup = RadioGroup;
exports.Section = Section;
exports.Select = Select;
exports.SubTitle = SubTitle;
exports.Table = Table;
exports.TableBody = TableBody;
exports.TableFoot = TableFoot;
exports.TableHead = TableHead;
exports.Tag = Tag;
exports.Tags = Tags;
exports.Td = Td;
exports.Text = Text;
exports.TextArea = TextArea;
exports.Th = Th;
exports.Tile = Tile;
exports.Title = Title;
exports.Tr = Tr;
exports.Uncontrolled = Uncontrolled;
exports.classNames = classNames;
exports.classNamesHelper = classNamesHelper;
exports.component = component;
exports.controlClasses = controlClasses;
exports.helpersClasses = helpersClasses;
exports.removeControlHelpers = removeControlHelpers;
exports.removeHelpers = removeHelpers;
exports.removeIconHelpers = removeIconHelpers;
exports.removeTextHelpers = removeTextHelpers;
exports.textHelpersClasses = textHelpersClasses;
//# sourceMappingURL=devfractal-ui-core.cjs.development.js.map
