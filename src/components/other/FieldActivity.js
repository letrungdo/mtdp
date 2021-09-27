import { Col, Row } from "antd";
import classNames from "classnames";
import React from "react";
import fieldActivity from "../../data/field-activity.json";
import SectionTitle from "./SectionTitle";

function FieldActivity({ containerFluid, column, threeCol, style, className }) {
  const renderCol = () => {
    return threeCol
      ? { xs: 24, md: 8 }
      : column
      ? { xs: 24, sm: 12, md: 6, lg: 24 }
      : { xs: 24, md: 6 };
  };
  const col = renderCol();
  return (
    <div
      className={`benefits ${classNames(className, { "-column": column })}`}
      style={style}
    >
      <SectionTitle title="Lĩnh vực hoạt động" className="-center" />
      <div className="benefits-wrapper">
        <Row gutter={10}>
          {fieldActivity
            .slice(0, threeCol ? 3 : fieldActivity.length)
            .map((item, index) => (
              <Col key={index} {...renderCol()}>
                <div className="benefits-item">
                  <i
                    class={`benefits-item__image fal fa-3x ${item.iconSrc}`}
                  ></i>
                  <h5 className="benefits-item__title">{item.name}</h5>
                  <p className="benefits-item__description">
                    {item.description}
                  </p>
                </div>
              </Col>
            ))}
        </Row>
      </div>
    </div>
  );
}

export default React.memo(FieldActivity);
