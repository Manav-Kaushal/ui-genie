import { Shape } from "@/redux/slice/shapes";
import { Arrow } from "./arrow";
import { Ellipse } from "./ellipse";
import { Frame } from "./frame";
import { Line } from "./line";
import { Rectangle } from "./rectangle";
import { Stroke } from "./stroke";
import { Text } from "./text";

type ShapeRendererProps = {
  shape: Shape;
  toggleInspiration: () => void;
  toggleChat: (generatedUUID: string) => void;
  generateWorkflow: (generatedUUID: string) => void;
  exportDesign: (generatedUUID: string, element: HTMLElement | null) => void;
};

const ShapeRenderer = ({
  shape,
  toggleInspiration,
  toggleChat,
  generateWorkflow,
  exportDesign,
}: ShapeRendererProps) => {
  switch (shape.type) {
    case "frame":
      return <Frame shape={shape} toggleInspiration={toggleInspiration} />;
    case "rect":
      return <Rectangle shape={shape} />;
    case "ellipse":
      return <Ellipse shape={shape} />;
    case "freedraw":
      return <Stroke shape={shape} />;
    case "arrow":
      return <Arrow shape={shape} />;
    case "line":
      return <Line shape={shape} />;
    case "text":
      return <Text shape={shape} />;
  }
};

export default ShapeRenderer;
