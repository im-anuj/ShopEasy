import dayjs from 'dayjs';
import { formatMoney } from '../../utils/money';

export function OrderHeader({order}) {
  return (
    <div className="order-header">
      <div className="order-header-left-section">
        <div className="order-date">
          <div className="order-header-label">Order Placed:</div>
          <div data-testid="order-date">
            {/* Convert orderTimeMs to a Number because PostgreSQL (used on Render) returns BIGINT as a string.
              On my local setup, SQLite returns BIGINT as a number, so it worked fine without conversion. */}
            {dayjs(Number(order.orderTimeMs)).format('MMMM D, YYYY')} 
          </div>
        </div>
        <div className="order-total">
          <div className="order-header-label">Total:</div>
          <div data-testid="order-total">
            {formatMoney(order.totalCostCents)}
          </div>
        </div>
      </div>

      <div className="order-header-right-section">
        <div className="order-header-label">Order ID:</div>
        <div data-testid="order-id">{order.id}</div>
      </div>
    </div>
  );
}