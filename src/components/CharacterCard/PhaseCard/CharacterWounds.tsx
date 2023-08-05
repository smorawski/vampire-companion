import { useMemo, useCallback, useState } from "react";
import { HealthThresholdEvent } from "../../../data/types";

import styles from "./CharacterWounds.module.css";
import SkullIcon from "../../Icons/Skull";

const KNOB_MARGIN = 20;

interface CharacterWoundsProps {
  wounds: number;
  maxWounds: number;
  thresholds: Record<number, HealthThresholdEvent>;
  addWound: () => void;
  removeWound: () => void;
}

interface EventMarkerProps {
  event: HealthThresholdEvent;
  style: Record<string, string>;
}

const EventMarker = ({ event, style }: EventMarkerProps) => {
  return (
    <div style={style} className={styles.marker}>
      {event.value || <SkullIcon />}
    </div>
  );
};

const CharacterWounds = ({
  thresholds,
  wounds,
  maxWounds,
  addWound,
  removeWound,
}: CharacterWoundsProps) => {
  const [width, setWidth] = useState(0);

  const knobs = useMemo(() => {
    return Array(maxWounds)
      .fill(null)
      .map((_, index) => index + 1);
  }, [thresholds, maxWounds]);

  const handleRef = useCallback((node: HTMLDivElement) => {
    if (!node) {
      return;
    }
    setWidth(node.clientWidth);
  }, []);

  const handleHeal = useCallback(() => {
    removeWound();
  }, [removeWound]);

  const handleWound = useCallback(() => {
    addWound();
  }, [addWound]);

  const knobSpace = useMemo(() => {
    return (width - 2 * KNOB_MARGIN) / (knobs.length - 1);
  }, [knobs, width]);

  return (
    <div className={styles.container}>
      <div
        className={`${styles.button} ${styles.buttonLeft}`}
        onClick={handleHeal}
      />
      <div className={styles.axis} ref={handleRef}>
        {knobs.map((number, index) => [
          <div
            key={number}
            className={styles.knob}
            style={{
              left: `${KNOB_MARGIN + index * knobSpace}px`,
            }}
          />,
          thresholds[number] && (
            <EventMarker
              key={`event-number`}
              event={thresholds[number]}
              style={{ left: `${KNOB_MARGIN + index * knobSpace}px` }}
            />
          ),
        ])}
        {wounds > 0 && (
          <div
            className={styles.woundsIndicator}
            style={{
              left: `${KNOB_MARGIN + (wounds - 1) * knobSpace}px`,
            }}
          />
        )}
      </div>
      <div
        className={`${styles.button} ${styles.buttonRight}`}
        onClick={handleWound}
      />
    </div>
  );
};

export default CharacterWounds;
