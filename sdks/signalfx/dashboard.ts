// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class Dashboard extends pulumi.CustomResource {
    /**
     * Get an existing Dashboard resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DashboardState, opts?: pulumi.CustomResourceOptions): Dashboard {
        return new Dashboard(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'signalfx:index/dashboard:Dashboard';

    /**
     * Returns true if the given object is an instance of Dashboard.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Dashboard {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Dashboard.__pulumiType;
    }

    /**
     * Team IDs that have write access to this dashboard
     *
     * @deprecated Deprecated
     */
    public readonly authorizedWriterTeams!: pulumi.Output<string[] | undefined>;
    /**
     * User IDs that have write access to this dashboard
     *
     * @deprecated Deprecated
     */
    public readonly authorizedWriterUsers!: pulumi.Output<string[] | undefined>;
    /**
     * Chart ID and layout information for the charts in the dashboard
     */
    public readonly charts!: pulumi.Output<outputs.DashboardChart[] | undefined>;
    /**
     * Specifies the chart data display resolution for charts in this dashboard. Value can be one of "default", "low", "high",
     * or "highest". default by default
     */
    public readonly chartsResolution!: pulumi.Output<string | undefined>;
    /**
     * Column layout. Charts listed, will be placed in a single column with the same width and height
     */
    public readonly columns!: pulumi.Output<outputs.DashboardColumn[] | undefined>;
    /**
     * The ID of the dashboard group that contains the dashboard. If an ID is not provided during creation, the dashboard will
     * be placed in a newly created dashboard group
     */
    public readonly dashboardGroup!: pulumi.Output<string>;
    /**
     * Description of the dashboard (Optional)
     */
    public readonly description!: pulumi.Output<string | undefined>;
    public readonly discoveryOptionsQuery!: pulumi.Output<string | undefined>;
    public readonly discoveryOptionsSelectors!: pulumi.Output<string[] | undefined>;
    /**
     * Seconds since epoch to end the visualization
     */
    public readonly endTime!: pulumi.Output<number | undefined>;
    /**
     * Event overlay to add to charts
     */
    public readonly eventOverlays!: pulumi.Output<outputs.DashboardEventOverlay[] | undefined>;
    /**
     * Filter to apply to each chart in the dashboard
     */
    public readonly filters!: pulumi.Output<outputs.DashboardFilter[] | undefined>;
    /**
     * Grid dashboard layout. Charts listed will be placed in a grid by row with the same width and height. If a chart can't
     * fit in a row, it will be placed automatically in the next row
     */
    public readonly grids!: pulumi.Output<outputs.DashboardGrid[] | undefined>;
    /**
     * Name of the dashboard
     */
    public readonly name!: pulumi.Output<string>;
    public readonly permissions!: pulumi.Output<outputs.DashboardPermissions | undefined>;
    /**
     * Event overlay added to charts by default to charts
     */
    public readonly selectedEventOverlays!: pulumi.Output<outputs.DashboardSelectedEventOverlay[] | undefined>;
    /**
     * Seconds since epoch to start the visualization
     */
    public readonly startTime!: pulumi.Output<number | undefined>;
    /**
     * Tags of the dashboard
     */
    public readonly tags!: pulumi.Output<string[] | undefined>;
    /**
     * From when to display data. Splunk Observability Cloud time syntax (e.g. -5m, -1h)
     */
    public readonly timeRange!: pulumi.Output<string | undefined>;
    /**
     * URL of the dashboard
     */
    public /*out*/ readonly url!: pulumi.Output<string>;
    /**
     * Dashboard variable to apply to each chart in the dashboard
     */
    public readonly variables!: pulumi.Output<outputs.DashboardVariable[] | undefined>;

    /**
     * Create a Dashboard resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DashboardArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: DashboardArgs | DashboardState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as DashboardState | undefined;
            resourceInputs["authorizedWriterTeams"] = state ? state.authorizedWriterTeams : undefined;
            resourceInputs["authorizedWriterUsers"] = state ? state.authorizedWriterUsers : undefined;
            resourceInputs["charts"] = state ? state.charts : undefined;
            resourceInputs["chartsResolution"] = state ? state.chartsResolution : undefined;
            resourceInputs["columns"] = state ? state.columns : undefined;
            resourceInputs["dashboardGroup"] = state ? state.dashboardGroup : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["discoveryOptionsQuery"] = state ? state.discoveryOptionsQuery : undefined;
            resourceInputs["discoveryOptionsSelectors"] = state ? state.discoveryOptionsSelectors : undefined;
            resourceInputs["endTime"] = state ? state.endTime : undefined;
            resourceInputs["eventOverlays"] = state ? state.eventOverlays : undefined;
            resourceInputs["filters"] = state ? state.filters : undefined;
            resourceInputs["grids"] = state ? state.grids : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["permissions"] = state ? state.permissions : undefined;
            resourceInputs["selectedEventOverlays"] = state ? state.selectedEventOverlays : undefined;
            resourceInputs["startTime"] = state ? state.startTime : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["timeRange"] = state ? state.timeRange : undefined;
            resourceInputs["url"] = state ? state.url : undefined;
            resourceInputs["variables"] = state ? state.variables : undefined;
        } else {
            const args = argsOrState as DashboardArgs | undefined;
            if ((!args || args.dashboardGroup === undefined) && !opts.urn) {
                throw new Error("Missing required property 'dashboardGroup'");
            }
            resourceInputs["authorizedWriterTeams"] = args ? args.authorizedWriterTeams : undefined;
            resourceInputs["authorizedWriterUsers"] = args ? args.authorizedWriterUsers : undefined;
            resourceInputs["charts"] = args ? args.charts : undefined;
            resourceInputs["chartsResolution"] = args ? args.chartsResolution : undefined;
            resourceInputs["columns"] = args ? args.columns : undefined;
            resourceInputs["dashboardGroup"] = args ? args.dashboardGroup : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["discoveryOptionsQuery"] = args ? args.discoveryOptionsQuery : undefined;
            resourceInputs["discoveryOptionsSelectors"] = args ? args.discoveryOptionsSelectors : undefined;
            resourceInputs["endTime"] = args ? args.endTime : undefined;
            resourceInputs["eventOverlays"] = args ? args.eventOverlays : undefined;
            resourceInputs["filters"] = args ? args.filters : undefined;
            resourceInputs["grids"] = args ? args.grids : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["permissions"] = args ? args.permissions : undefined;
            resourceInputs["selectedEventOverlays"] = args ? args.selectedEventOverlays : undefined;
            resourceInputs["startTime"] = args ? args.startTime : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["timeRange"] = args ? args.timeRange : undefined;
            resourceInputs["variables"] = args ? args.variables : undefined;
            resourceInputs["url"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Dashboard.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Dashboard resources.
 */
export interface DashboardState {
    /**
     * Team IDs that have write access to this dashboard
     *
     * @deprecated Deprecated
     */
    authorizedWriterTeams?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * User IDs that have write access to this dashboard
     *
     * @deprecated Deprecated
     */
    authorizedWriterUsers?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Chart ID and layout information for the charts in the dashboard
     */
    charts?: pulumi.Input<pulumi.Input<inputs.DashboardChart>[]>;
    /**
     * Specifies the chart data display resolution for charts in this dashboard. Value can be one of "default", "low", "high",
     * or "highest". default by default
     */
    chartsResolution?: pulumi.Input<string>;
    /**
     * Column layout. Charts listed, will be placed in a single column with the same width and height
     */
    columns?: pulumi.Input<pulumi.Input<inputs.DashboardColumn>[]>;
    /**
     * The ID of the dashboard group that contains the dashboard. If an ID is not provided during creation, the dashboard will
     * be placed in a newly created dashboard group
     */
    dashboardGroup?: pulumi.Input<string>;
    /**
     * Description of the dashboard (Optional)
     */
    description?: pulumi.Input<string>;
    discoveryOptionsQuery?: pulumi.Input<string>;
    discoveryOptionsSelectors?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Seconds since epoch to end the visualization
     */
    endTime?: pulumi.Input<number>;
    /**
     * Event overlay to add to charts
     */
    eventOverlays?: pulumi.Input<pulumi.Input<inputs.DashboardEventOverlay>[]>;
    /**
     * Filter to apply to each chart in the dashboard
     */
    filters?: pulumi.Input<pulumi.Input<inputs.DashboardFilter>[]>;
    /**
     * Grid dashboard layout. Charts listed will be placed in a grid by row with the same width and height. If a chart can't
     * fit in a row, it will be placed automatically in the next row
     */
    grids?: pulumi.Input<pulumi.Input<inputs.DashboardGrid>[]>;
    /**
     * Name of the dashboard
     */
    name?: pulumi.Input<string>;
    permissions?: pulumi.Input<inputs.DashboardPermissions>;
    /**
     * Event overlay added to charts by default to charts
     */
    selectedEventOverlays?: pulumi.Input<pulumi.Input<inputs.DashboardSelectedEventOverlay>[]>;
    /**
     * Seconds since epoch to start the visualization
     */
    startTime?: pulumi.Input<number>;
    /**
     * Tags of the dashboard
     */
    tags?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * From when to display data. Splunk Observability Cloud time syntax (e.g. -5m, -1h)
     */
    timeRange?: pulumi.Input<string>;
    /**
     * URL of the dashboard
     */
    url?: pulumi.Input<string>;
    /**
     * Dashboard variable to apply to each chart in the dashboard
     */
    variables?: pulumi.Input<pulumi.Input<inputs.DashboardVariable>[]>;
}

/**
 * The set of arguments for constructing a Dashboard resource.
 */
export interface DashboardArgs {
    /**
     * Team IDs that have write access to this dashboard
     *
     * @deprecated Deprecated
     */
    authorizedWriterTeams?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * User IDs that have write access to this dashboard
     *
     * @deprecated Deprecated
     */
    authorizedWriterUsers?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Chart ID and layout information for the charts in the dashboard
     */
    charts?: pulumi.Input<pulumi.Input<inputs.DashboardChart>[]>;
    /**
     * Specifies the chart data display resolution for charts in this dashboard. Value can be one of "default", "low", "high",
     * or "highest". default by default
     */
    chartsResolution?: pulumi.Input<string>;
    /**
     * Column layout. Charts listed, will be placed in a single column with the same width and height
     */
    columns?: pulumi.Input<pulumi.Input<inputs.DashboardColumn>[]>;
    /**
     * The ID of the dashboard group that contains the dashboard. If an ID is not provided during creation, the dashboard will
     * be placed in a newly created dashboard group
     */
    dashboardGroup: pulumi.Input<string>;
    /**
     * Description of the dashboard (Optional)
     */
    description?: pulumi.Input<string>;
    discoveryOptionsQuery?: pulumi.Input<string>;
    discoveryOptionsSelectors?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Seconds since epoch to end the visualization
     */
    endTime?: pulumi.Input<number>;
    /**
     * Event overlay to add to charts
     */
    eventOverlays?: pulumi.Input<pulumi.Input<inputs.DashboardEventOverlay>[]>;
    /**
     * Filter to apply to each chart in the dashboard
     */
    filters?: pulumi.Input<pulumi.Input<inputs.DashboardFilter>[]>;
    /**
     * Grid dashboard layout. Charts listed will be placed in a grid by row with the same width and height. If a chart can't
     * fit in a row, it will be placed automatically in the next row
     */
    grids?: pulumi.Input<pulumi.Input<inputs.DashboardGrid>[]>;
    /**
     * Name of the dashboard
     */
    name?: pulumi.Input<string>;
    permissions?: pulumi.Input<inputs.DashboardPermissions>;
    /**
     * Event overlay added to charts by default to charts
     */
    selectedEventOverlays?: pulumi.Input<pulumi.Input<inputs.DashboardSelectedEventOverlay>[]>;
    /**
     * Seconds since epoch to start the visualization
     */
    startTime?: pulumi.Input<number>;
    /**
     * Tags of the dashboard
     */
    tags?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * From when to display data. Splunk Observability Cloud time syntax (e.g. -5m, -1h)
     */
    timeRange?: pulumi.Input<string>;
    /**
     * Dashboard variable to apply to each chart in the dashboard
     */
    variables?: pulumi.Input<pulumi.Input<inputs.DashboardVariable>[]>;
}
