import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import "./src/components/Button/Button.scss";
var __assign =
  (this && this.__assign) ||
  function () {
    __assign =
      Object.assign ||
      function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
    return __assign.apply(this, arguments);
  };
export var Button = function () {
  return _jsx(_Fragment, {
    children: _jsx(
      "button",
      __assign({ className: "btn" }, { children: "button" })
    ),
  });
};
