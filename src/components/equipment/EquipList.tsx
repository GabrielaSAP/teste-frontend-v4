import React from "react";
import { List, Badge, Avatar } from "antd";
import { CheckCircleFilled } from "@ant-design/icons";

type Equipment = {
  title: string;
  state: string;
  position: [number, number];
  model: string;
};

type Props = {
  data: Equipment[];
};

const EquipList: React.FC<Props> = ({ data }) => {
  return (
    <List
      itemLayout="horizontal"
      dataSource={data}
      renderItem={(item, index) => (
        <List.Item>
          <a className="list-item" href="/">
            <List.Item.Meta
              avatar={
                <Badge
                  count={<CheckCircleFilled style={{ color: "#2ecc71" }} />} //TODO: fazer os tipos de estados dinamicamente
                >
                  <Avatar
                    src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`}
                    shape="circle"
                    size="large"
                  />
                </Badge>
              }
              title={item.title}
              description={
                <span>
                  <b>Estado:</b> {item.state}
                  <br />
                  <b>Modelo:</b> {item.model}
                  <br />
                  <b>Posição atual:</b> {item.position[0]} {item.position[1]}
                </span>
              }
            />
          </a>
        </List.Item>
      )}
    />
  );
};

export default EquipList;
