import { ConfigProvider } from "antd";
import CustomEmpty from "features/common/components/Empty/CustomEmpty";
import {
  useAppDispatch,
  useAppSelector,
} from "features/common/hooks/useReduxHooks";
import { greenTheme, purpleTheme } from "styles/theme/lightTheme";
import arEG from "antd/lib/locale/ar_EG";
import enUS from "antd/lib/locale/en_US";
import { useEffect } from "react";
import { UiSliceActions } from "features/common/redux/slices/uiSlices";

/**
 * @namespace AntDesignConfigProvider
 */

/**
 * @description init dirctions ,locale , theme ,and empty render component
 *   @param {any} children - wrapped components
 */
const AntDesignConfigProvider = ({ children }: any) => {
  const { direction, theme, language } = useAppSelector((state) => state.ui);
  const { token, userInfo } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!userInfo?.brand_id && token && false) {
      document.querySelector("body")?.setAttribute("data-theme", "green");
      dispatch(UiSliceActions.ChangeTheme("green"));
    } else {
      document.querySelector("body")?.setAttribute("data-theme", "purple");
      dispatch(UiSliceActions.ChangeTheme("purple"));
    }
  }, [userInfo]);

  const customizeRenderEmpty = () => (
    <div style={{ textAlign: "center", height: "150px" }}>
      <CustomEmpty hidden={false} />
    </div>
  );
  return (
    <ConfigProvider
      direction={direction}
      locale={
        language === "en"
          ? {
              ...enUS,
              Form: {
                defaultValidateMessages: {
                  required: "Please Enter This Field!",
                  whitespace: "No whitespaces in the field",
                },
              },
            }
          : {
              ...arEG,
              Form: {
                defaultValidateMessages: {
                  required: "يرجى ادخال الحقل!",
                  whitespace: "بدون مسافات بيضاء رجاء",
                  number: {
                    max: "يجب ان يكون الحقل بين ${min} و${max}",
                    min: "يجب ان يكون الحقل بين ${min} و${max}",
                    range: "يجب ان يكون الحقل بين ${min} و${max}",
                  },
                },
              },
            }
      }
      theme={theme === "green" ? greenTheme : purpleTheme}
      renderEmpty={customizeRenderEmpty}
    >
      {children}
    </ConfigProvider>
  );
};
export default AntDesignConfigProvider;
