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
    public static readonly __pulumiType = 'lightstep:index/dashboard:Dashboard';

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

    public readonly charts!: pulumi.Output<outputs.DashboardChart[] | undefined>;
    public readonly dashboardDescription!: pulumi.Output<string | undefined>;
    public readonly dashboardName!: pulumi.Output<string>;
    /**
     * IDs of the event queries to display on this dashboard
     */
    public readonly eventQueryIds!: pulumi.Output<string[] | undefined>;
    public readonly groups!: pulumi.Output<outputs.DashboardGroup[] | undefined>;
    /**
     * Labels can be key/value pairs or standalone values.
     */
    public readonly labels!: pulumi.Output<outputs.DashboardLabel[] | undefined>;
    public readonly projectName!: pulumi.Output<string>;
    /**
     * Variable to be used in dashboard queries for dynamically filtering telemetry data
     */
    public readonly templateVariables!: pulumi.Output<outputs.DashboardTemplateVariable[] | undefined>;
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * Links to other resources
     */
    public readonly workflowLinks!: pulumi.Output<outputs.DashboardWorkflowLink[] | undefined>;

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
            resourceInputs["charts"] = state ? state.charts : undefined;
            resourceInputs["dashboardDescription"] = state ? state.dashboardDescription : undefined;
            resourceInputs["dashboardName"] = state ? state.dashboardName : undefined;
            resourceInputs["eventQueryIds"] = state ? state.eventQueryIds : undefined;
            resourceInputs["groups"] = state ? state.groups : undefined;
            resourceInputs["labels"] = state ? state.labels : undefined;
            resourceInputs["projectName"] = state ? state.projectName : undefined;
            resourceInputs["templateVariables"] = state ? state.templateVariables : undefined;
            resourceInputs["type"] = state ? state.type : undefined;
            resourceInputs["workflowLinks"] = state ? state.workflowLinks : undefined;
        } else {
            const args = argsOrState as DashboardArgs | undefined;
            if ((!args || args.dashboardName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'dashboardName'");
            }
            if ((!args || args.projectName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'projectName'");
            }
            resourceInputs["charts"] = args ? args.charts : undefined;
            resourceInputs["dashboardDescription"] = args ? args.dashboardDescription : undefined;
            resourceInputs["dashboardName"] = args ? args.dashboardName : undefined;
            resourceInputs["eventQueryIds"] = args ? args.eventQueryIds : undefined;
            resourceInputs["groups"] = args ? args.groups : undefined;
            resourceInputs["labels"] = args ? args.labels : undefined;
            resourceInputs["projectName"] = args ? args.projectName : undefined;
            resourceInputs["templateVariables"] = args ? args.templateVariables : undefined;
            resourceInputs["workflowLinks"] = args ? args.workflowLinks : undefined;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Dashboard.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Dashboard resources.
 */
export interface DashboardState {
    charts?: pulumi.Input<pulumi.Input<inputs.DashboardChart>[]>;
    dashboardDescription?: pulumi.Input<string>;
    dashboardName?: pulumi.Input<string>;
    /**
     * IDs of the event queries to display on this dashboard
     */
    eventQueryIds?: pulumi.Input<pulumi.Input<string>[]>;
    groups?: pulumi.Input<pulumi.Input<inputs.DashboardGroup>[]>;
    /**
     * Labels can be key/value pairs or standalone values.
     */
    labels?: pulumi.Input<pulumi.Input<inputs.DashboardLabel>[]>;
    projectName?: pulumi.Input<string>;
    /**
     * Variable to be used in dashboard queries for dynamically filtering telemetry data
     */
    templateVariables?: pulumi.Input<pulumi.Input<inputs.DashboardTemplateVariable>[]>;
    type?: pulumi.Input<string>;
    /**
     * Links to other resources
     */
    workflowLinks?: pulumi.Input<pulumi.Input<inputs.DashboardWorkflowLink>[]>;
}

/**
 * The set of arguments for constructing a Dashboard resource.
 */
export interface DashboardArgs {
    charts?: pulumi.Input<pulumi.Input<inputs.DashboardChart>[]>;
    dashboardDescription?: pulumi.Input<string>;
    dashboardName: pulumi.Input<string>;
    /**
     * IDs of the event queries to display on this dashboard
     */
    eventQueryIds?: pulumi.Input<pulumi.Input<string>[]>;
    groups?: pulumi.Input<pulumi.Input<inputs.DashboardGroup>[]>;
    /**
     * Labels can be key/value pairs or standalone values.
     */
    labels?: pulumi.Input<pulumi.Input<inputs.DashboardLabel>[]>;
    projectName: pulumi.Input<string>;
    /**
     * Variable to be used in dashboard queries for dynamically filtering telemetry data
     */
    templateVariables?: pulumi.Input<pulumi.Input<inputs.DashboardTemplateVariable>[]>;
    /**
     * Links to other resources
     */
    workflowLinks?: pulumi.Input<pulumi.Input<inputs.DashboardWorkflowLink>[]>;
}
