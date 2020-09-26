<?php

declare(strict_types=1);

namespace App\Pagerfanta;

use eZ\Publish\API\Repository\LocationService;
use eZ\Publish\API\Repository\Values\Filter\Filter;
use Pagerfanta\Adapter\AdapterInterface;

final class FilterLocationAdapter implements AdapterInterface
{
    /**
     * @var \eZ\Publish\API\Repository\Values\Filter\Filter
     */
    private $filter;

    /**
     * @var \eZ\Publish\API\Repository\LocationService
     */
    private $locationService;

    public function __construct(Filter $filter, LocationService $locationService)
    {
        $this->filter = $filter;
        $this->locationService = $locationService;
    }

    public function getNbResults()
    {
        if (!isset($this->nbResults)) {
            $filter = $this->filter;

            $filter->sliceBy(0, 0);

            $this->nbResults = $this->locationService
                ->find($filter)
                ->totalCount;
        }

        return $this->nbResults;
    }

    public function getSlice($offset, $length)
    {
        $filter = clone $this->filter;

        $filter->sliceBy($length, $offset);

        return $this->locationService
            ->find($filter);
    }
}
