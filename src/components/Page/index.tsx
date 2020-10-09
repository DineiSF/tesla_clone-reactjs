import React from 'react';

import { ModelWrapper, ModelSection } from '../Model'
import DefaultOverlayContet from '../DefaultOverlayContet';

import { Container } from './styles';

const Page: React.FC = () => {
  return (
    <Container>
      <ModelWrapper>
        <div>
          {[  'Model One',
              'Model Two',
              'Model Three',
              'Model Four',
              'Model Five',
              'Model Six',
              'Model Seven',
          ].map(modelName => (
            <ModelSection
            key           = { modelName }
            className     = "colored"
            modelName     = { modelName }
            overlayNode   = {
              <DefaultOverlayContet 
                label       = { modelName }
                description = "Order Online for Delivery"
              />
            }
          />
          ))}
        </div>
      </ModelWrapper>
    </Container>
  );
};

export default Page;
