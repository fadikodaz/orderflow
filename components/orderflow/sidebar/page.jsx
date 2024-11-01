import React from 'react';
import { Box, Stack, Typography, FormControl, Select, MenuItem, Checkbox, FormControlLabel, Slider } from '@mui/material';

const OrderflowPanel = () => {
  return (
    <Box sx={{ bgcolor: '#111', color: 'white', padding: 2, overflow: 'hidden'}}>
      <Typography variant="h6" gutterBottom>Orderflow</Typography>

      <Stack spacing={3}>
        {/* Section 1 */}
        <Stack spacing={1}>
          <FormControl fullWidth>
            <Select
              value="SPX"
              sx={{
                color: 'white',
                bgcolor: 'transparent',
                border: '1px solid white',
                height: '36px', // Adjusted height
                '& .MuiSelect-icon': { color: 'white' },
              }}
            >
              <MenuItem value="SPX">SPX</MenuItem>
            </Select>
          </FormControl>

          <FormControl fullWidth>
            <Select
              value="aggregate dex"
              sx={{
                color: 'white',
                bgcolor: 'transparent',
                border: '1px solid white',
                height: '36px', // Adjusted height
                '& .MuiSelect-icon': { color: 'white' },
              }}
            >
              <MenuItem value="aggregate dex">Aggregate DEX</MenuItem>
            </Select>
          </FormControl>

          <FormControlLabel
            control={<Checkbox checked sx={{ color: 'white', '&.Mui-checked': { color: 'white' } }} />}
            label="Spot"
            sx={{ color: 'white' }}
          />

          <FormControlLabel
            control={<Checkbox checked sx={{ color: 'white', '&.Mui-checked': { color: 'white' } }} />}
            label="Auto Scaling"
            sx={{ color: 'white' }}
          />

          <FormControlLabel
            control={<Checkbox sx={{ color: 'white', '&.Mui-checked': { color: 'white' } }} />}
            label="Combine Metrics"
            sx={{ color: 'white' }}
          />
        </Stack>

        {/* Section 2 */}
        <Stack spacing={1}>
          <FormControl fullWidth>
            <Select
              value="dex orderflow"
              sx={{
                color: 'white',
                bgcolor: 'transparent',
                border: '1px solid white',
                height: '36px', // Adjusted height
                '& .MuiSelect-icon': { color: 'white' },
              }}
            >
              <MenuItem value="dex orderflow">DEX Orderflow</MenuItem>
            </Select>
          </FormControl>

          <FormControlLabel
            control={<Checkbox checked sx={{ color: 'white', '&.Mui-checked': { color: 'white' } }} />}
            label="Spot"
            sx={{ color: 'white' }}
          />

          <FormControlLabel
            control={<Checkbox checked sx={{ color: 'white', '&.Mui-checked': { color: 'white' } }} />}
            label="Auto Scaling"
            sx={{ color: 'white' }}
          />

          <FormControlLabel
            control={<Checkbox checked sx={{ color: 'white', '&.Mui-checked': { color: 'white' } }} />}
            label="Combine Metrics"
            sx={{ color: 'white' }}
          />

          <Typography variant="body2">Orderflow Filter:</Typography>
          <Slider
            defaultValue={1}
            min={0}
            max={10}
            step={1}
            sx={{
              color: 'white',
              '& .MuiSlider-track': { color: 'white' },
              '& .MuiSlider-thumb': { color: 'white' },
            }}
          />
        </Stack>

        {/* Section 3 */}
        <Stack spacing={1}>
          <FormControl fullWidth>
            <Select
              value="convexity orderflow"
              sx={{
                color: 'white',
                bgcolor: 'transparent',
                border: '1px solid white',
                height: '36px', // Adjusted height
                '& .MuiSelect-icon': { color: 'white' },
              }}
            >
              <MenuItem value="convexity orderflow">Convexity Orderflow</MenuItem>
            </Select>
          </FormControl>

          <FormControlLabel
            control={<Checkbox checked sx={{ color: 'white', '&.Mui-checked': { color: 'white' } }} />}
            label="Spot"
            sx={{ color: 'white' }}
          />

          <FormControlLabel
            control={<Checkbox checked sx={{ color: 'white', '&.Mui-checked': { color: 'white' } }} />}
            label="Auto Scaling"
            sx={{ color: 'white' }}
          />

          <FormControlLabel
            control={<Checkbox checked sx={{ color: 'white', '&.Mui-checked': { color: 'white' } }} />}
            label="Combine Metrics"
            sx={{ color: 'white' }}
          />

          <Typography variant="body2">Orderflow Filter:</Typography>
          <Slider
            defaultValue={1}
            min={0}
            max={10}
            step={1}
            sx={{
              color: 'white',
              '& .MuiSlider-track': { color: 'white' },
              '& .MuiSlider-thumb': { color: 'white' },
            }}
          />
        </Stack>
      </Stack>
    </Box>
  );
};

export default OrderflowPanel;
