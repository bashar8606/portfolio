import { Container, Section, Text, Wrapper } from '../../../components/UIKit';
import Value from './Value';

const items = [
  {
    icon: 'M7.49991 0.876892C3.84222 0.876892 0.877075 3.84204 0.877075 7.49972C0.877075 11.1574 3.84222 14.1226 7.49991 14.1226C11.1576 14.1226 14.1227 11.1574 14.1227 7.49972C14.1227 3.84204 11.1576 0.876892 7.49991 0.876892ZM1.82708 7.49972C1.82708 4.36671 4.36689 1.82689 7.49991 1.82689C10.6329 1.82689 13.1727 4.36671 13.1727 7.49972C13.1727 10.6327 10.6329 13.1726 7.49991 13.1726C4.36689 13.1726 1.82708 10.6327 1.82708 7.49972ZM5.03747 9.21395C4.87949 8.98746 4.56782 8.93193 4.34133 9.08991C4.11484 9.24789 4.05931 9.55956 4.21729 9.78605C4.93926 10.8211 6.14033 11.5 7.50004 11.5C8.85974 11.5 10.0608 10.8211 10.7828 9.78605C10.9408 9.55956 10.8852 9.24789 10.6587 9.08991C10.4323 8.93193 10.1206 8.98746 9.9626 9.21395C9.41963 9.99238 8.51907 10.5 7.50004 10.5C6.481 10.5 5.58044 9.99238 5.03747 9.21395ZM5.37503 6.84998C5.85828 6.84998 6.25003 6.45815 6.25003 5.97498C6.25003 5.4918 5.85828 5.09998 5.37503 5.09998C4.89179 5.09998 4.50003 5.4918 4.50003 5.97498C4.50003 6.45815 4.89179 6.84998 5.37503 6.84998ZM10.5 5.97498C10.5 6.45815 10.1083 6.84998 9.62503 6.84998C9.14179 6.84998 8.75003 6.45815 8.75003 5.97498C8.75003 5.4918 9.14179 5.09998 9.62503 5.09998C10.1083 5.09998 10.5 5.4918 10.5 5.97498Z',
    title: 'Passionate',
    description:
      'As Pasteur himself commented, “Chance favors only the prepared mind.',
  },
  {
    icon: 'M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884 10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L9.30884 10.0159ZM4.25 6.5C4.25 6.22386 4.47386 6 4.75 6H6V4.75C6 4.47386 6.22386 4.25 6.5 4.25C6.77614 4.25 7 4.47386 7 4.75V6H8.25C8.52614 6 8.75 6.22386 8.75 6.5C8.75 6.77614 8.52614 7 8.25 7H7V8.25C7 8.52614 6.77614 8.75 6.5 8.75C6.22386 8.75 6 8.52614 6 8.25V7H4.75C4.47386 7 4.25 6.77614 4.25 6.5Z',
    title: 'Curious',
    description:
      'As Pasteur himself commented, “Chance favors only the prepared mind.',
  },
  {
    icon: 'M0.900024 7.50002C0.900024 3.85495 3.85495 0.900024 7.50002 0.900024C11.1451 0.900024 14.1 3.85495 14.1 7.50002C14.1 11.1451 11.1451 14.1 7.50002 14.1C3.85495 14.1 0.900024 11.1451 0.900024 7.50002ZM7.50002 1.80002C4.35201 1.80002 1.80002 4.35201 1.80002 7.50002C1.80002 10.648 4.35201 13.2 7.50002 13.2C10.648 13.2 13.2 10.648 13.2 7.50002C13.2 4.35201 10.648 1.80002 7.50002 1.80002ZM3.07504 7.50002C3.07504 5.05617 5.05618 3.07502 7.50004 3.07502C9.94388 3.07502 11.925 5.05617 11.925 7.50002C11.925 9.94386 9.94388 11.925 7.50004 11.925C5.05618 11.925 3.07504 9.94386 3.07504 7.50002ZM7.50004 3.92502C5.52562 3.92502 3.92504 5.52561 3.92504 7.50002C3.92504 9.47442 5.52563 11.075 7.50004 11.075C9.47444 11.075 11.075 9.47442 11.075 7.50002C11.075 5.52561 9.47444 3.92502 7.50004 3.92502ZM7.50004 5.25002C6.2574 5.25002 5.25004 6.25739 5.25004 7.50002C5.25004 8.74266 6.2574 9.75002 7.50004 9.75002C8.74267 9.75002 9.75004 8.74266 9.75004 7.50002C9.75004 6.25738 8.74267 5.25002 7.50004 5.25002ZM6.05004 7.50002C6.05004 6.69921 6.69923 6.05002 7.50004 6.05002C8.30084 6.05002 8.95004 6.69921 8.95004 7.50002C8.95004 8.30083 8.30084 8.95002 7.50004 8.95002C6.69923 8.95002 6.05004 8.30083 6.05004 7.50002Z',
    title: 'Team Work',
    description:
      'As Pasteur himself commented, “Chance favors only the prepared mind.',
  },
  {
    icon: 'M0.5 0C0.223858 0 0 0.223858 0 0.5V14.5C0 14.7761 0.223858 15 0.5 15H4.5C4.77614 15 5 14.7761 5 14.5V5H14.5C14.7761 5 15 4.77614 15 4.5V0.5C15 0.223858 14.7761 0 14.5 0H0.5ZM1 4.07505L1 1H4.07502C4.07502 1 4.07502 1 4.07502 1L4.07505 4.07507L1 4.07505ZM0.999997 4.92505L1 14H4V12.925H2.75002C2.5153 12.925 2.32502 12.7348 2.32502 12.5C2.32502 12.2653 2.5153 12.075 2.75002 12.075H4V10.925H2.25002C2.0153 10.925 1.82502 10.7347 1.82502 10.5C1.82502 10.2653 2.0153 10.075 2.25002 10.075H4V8.92504L2.75002 8.92502C2.5153 8.92502 2.32502 8.73474 2.32502 8.50002C2.32503 8.26529 2.51531 8.07502 2.75003 8.07502L4 8.07504V6.92502L2.74999 6.925C2.51527 6.925 2.325 6.73472 2.325 6.5C2.325 6.26528 2.51529 6.075 2.75001 6.075L4 6.07502V4.92507L0.999997 4.92505ZM4.92505 4H6.075V2.75006C6.075 2.51534 6.26528 2.32506 6.5 2.32506C6.73472 2.32506 6.925 2.51534 6.925 2.75006V4H8.07502V2.75005C8.07502 2.51533 8.2653 2.32505 8.50002 2.32505C8.73474 2.32505 8.92502 2.51533 8.92502 2.75005V4H10.0751V2.25005C10.0751 2.01533 10.2653 1.82505 10.5001 1.82505C10.7348 1.82505 10.9251 2.01533 10.9251 2.25005V4H12.0751V2.75005C12.0751 2.51533 12.2654 2.32505 12.5001 2.32505C12.7348 2.32505 12.9251 2.51533 12.9251 2.75005V4H14V1H4.92502L4.92505 4Z',
    title: 'Discipline',
    description:
      'As Pasteur himself commented, “Chance favors only the prepared mind.',
  },
  {
    icon: 'M13.9 0.499976C13.9 0.279062 13.7209 0.0999756 13.5 0.0999756C13.2791 0.0999756 13.1 0.279062 13.1 0.499976V1.09998H12.5C12.2791 1.09998 12.1 1.27906 12.1 1.49998C12.1 1.72089 12.2791 1.89998 12.5 1.89998H13.1V2.49998C13.1 2.72089 13.2791 2.89998 13.5 2.89998C13.7209 2.89998 13.9 2.72089 13.9 2.49998V1.89998H14.5C14.7209 1.89998 14.9 1.72089 14.9 1.49998C14.9 1.27906 14.7209 1.09998 14.5 1.09998H13.9V0.499976ZM11.8536 3.14642C12.0488 3.34168 12.0488 3.65826 11.8536 3.85353L10.8536 4.85353C10.6583 5.04879 10.3417 5.04879 10.1465 4.85353C9.9512 4.65827 9.9512 4.34169 10.1465 4.14642L11.1464 3.14643C11.3417 2.95116 11.6583 2.95116 11.8536 3.14642ZM9.85357 5.14642C10.0488 5.34168 10.0488 5.65827 9.85357 5.85353L2.85355 12.8535C2.65829 13.0488 2.34171 13.0488 2.14645 12.8535C1.95118 12.6583 1.95118 12.3417 2.14645 12.1464L9.14646 5.14642C9.34172 4.95116 9.65831 4.95116 9.85357 5.14642ZM13.5 5.09998C13.7209 5.09998 13.9 5.27906 13.9 5.49998V6.09998H14.5C14.7209 6.09998 14.9 6.27906 14.9 6.49998C14.9 6.72089 14.7209 6.89998 14.5 6.89998H13.9V7.49998C13.9 7.72089 13.7209 7.89998 13.5 7.89998C13.2791 7.89998 13.1 7.72089 13.1 7.49998V6.89998H12.5C12.2791 6.89998 12.1 6.72089 12.1 6.49998C12.1 6.27906 12.2791 6.09998 12.5 6.09998H13.1V5.49998C13.1 5.27906 13.2791 5.09998 13.5 5.09998ZM8.90002 0.499976C8.90002 0.279062 8.72093 0.0999756 8.50002 0.0999756C8.2791 0.0999756 8.10002 0.279062 8.10002 0.499976V1.09998H7.50002C7.2791 1.09998 7.10002 1.27906 7.10002 1.49998C7.10002 1.72089 7.2791 1.89998 7.50002 1.89998H8.10002V2.49998C8.10002 2.72089 8.2791 2.89998 8.50002 2.89998C8.72093 2.89998 8.90002 2.72089 8.90002 2.49998V1.89998H9.50002C9.72093 1.89998 9.90002 1.72089 9.90002 1.49998C9.90002 1.27906 9.72093 1.09998 9.50002 1.09998H8.90002V0.499976Z',
    title: 'Creative',
    description:
      'As Pasteur himself commented, “Chance favors only the prepared mind.',
  },
  {
    icon: 'M7.5 0.875C5.49797 0.875 3.875 2.49797 3.875 4.5C3.875 6.15288 4.98124 7.54738 6.49373 7.98351C5.2997 8.12901 4.27557 8.55134 3.50407 9.31167C2.52216 10.2794 2.02502 11.72 2.02502 13.5999C2.02502 13.8623 2.23769 14.0749 2.50002 14.0749C2.76236 14.0749 2.97502 13.8623 2.97502 13.5999C2.97502 11.8799 3.42786 10.7206 4.17091 9.9883C4.91536 9.25463 6.02674 8.87499 7.49995 8.87499C8.97317 8.87499 10.0846 9.25463 10.8291 9.98831C11.5721 10.7206 12.025 11.8799 12.025 13.5999C12.025 13.8623 12.2376 14.0749 12.5 14.0749C12.7623 14.075 12.975 13.8623 12.975 13.6C12.975 11.72 12.4778 10.2794 11.4959 9.31166C10.7244 8.55135 9.70025 8.12903 8.50625 7.98352C10.0187 7.5474 11.125 6.15289 11.125 4.5C11.125 2.49797 9.50203 0.875 7.5 0.875ZM4.825 4.5C4.825 3.02264 6.02264 1.825 7.5 1.825C8.97736 1.825 10.175 3.02264 10.175 4.5C10.175 5.97736 8.97736 7.175 7.5 7.175C6.02264 7.175 4.825 5.97736 4.825 4.5Z',
    title: 'Compassionate',
    description:
      'As Pasteur himself commented, “Chance favors only the prepared mind.',
  },
];

export default function Values() {
  return (
    <Section py={[45, 80, 100]} px={[32, 60, 90]}>
      <Container
        display={['flex']}
        flexDirection={['column']}
        alignItems={['center']}
        justifyContent={['center']}
      >
        <Wrapper
          display={['grid']}
          gridGap={[16]}
          maxWidth={[800]}
          textAlign={['center']}
        >
          <Text size={['heading4', 'heading2', 'heading2']}>
            What makes me who I am.
          </Text>
          <Text size='caption'>
            “If you work on yourself first, as Faraday did, developing a solid
            work ethic and organizational skills, eventually the right teacher
            will appear in your life.
          </Text>
        </Wrapper>
        <Wrapper
          display={['grid']}
          gridTemplateColumns={['1fr', '1fr 1fr', '1fr 1fr 1fr']}
          gridGap={[32]}
          mt={[48]}
        >
          {items.map((item, index) => (
            <Value
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </Wrapper>
      </Container>
    </Section>
  );
}
