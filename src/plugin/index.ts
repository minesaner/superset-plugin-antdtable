import { t, ChartMetadata, ChartPlugin } from "@superset-ui/core";
import buildQuery from "./buildQuery";
import controlPanel from "./controlPanel";
import transformProps from "./transformProps";
import thumbnail from "../images/thumbnail.png";

export default class SupersetPluginAntdchartTest extends ChartPlugin {
  constructor() {
    const metadata = new ChartMetadata({
      description: "Superset Plugin Antdchart Test description.",
      name: t("Antdchart Test"),
      thumbnail,
    });

    super({
      buildQuery,
      controlPanel,
      loadChart: () => import("../SupersetPluginAntdchartTest"),
      metadata,
      transformProps,
    });
  }
}
