import React from "react";
import { List, Badge, Avatar } from "antd";
import { CheckCircleFilled } from "@ant-design/icons";

type EquipListProps = {
  equipments: Equipment[];
};

const EquipList: React.FC<EquipListProps> = ({ equipments }) => {
  return (
    <List
      itemLayout="horizontal"
      dataSource={equipments}
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
              title={item.name}
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
