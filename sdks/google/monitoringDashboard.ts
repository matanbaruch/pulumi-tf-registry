// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class MonitoringDashboard extends pulumi.CustomResource {
    /**
     * Get an existing MonitoringDashboard resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: MonitoringDashboardState, opts?: pulumi.CustomResourceOptions): MonitoringDashboard {
        return new MonitoringDashboard(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'google:index/monitoringDashboard:MonitoringDashboard';

    /**
     * Returns true if the given object is an instance of MonitoringDashboard.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is MonitoringDashboard {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === MonitoringDashboard.__pulumiType;
    }

    /**
     * The JSON representation of a dashboard, following the format at
     * https://cloud.google.com/monitoring/api/ref_v3/rest/v1/projects.dashboards.
     */
    public readonly dashboardJson!: pulumi.Output<string>;
    /**
     * The ID of the project in which the resource belongs. If it is not provided, the provider project is used.
     */
    public readonly project!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.MonitoringDashboardTimeouts | undefined>;

    /**
     * Create a MonitoringDashboard resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: MonitoringDashboardArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: MonitoringDashboardArgs | MonitoringDashboardState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as MonitoringDashboardState | undefined;
            resourceInputs["dashboardJson"] = state ? state.dashboardJson : undefined;
            resourceInputs["project"] = state ? state.project : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as MonitoringDashboardArgs | undefined;
            if ((!args || args.dashboardJson === undefined) && !opts.urn) {
                throw new Error("Missing required property 'dashboardJson'");
            }
            resourceInputs["dashboardJson"] = args ? args.dashboardJson : undefined;
            resourceInputs["project"] = args ? args.project : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(MonitoringDashboard.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering MonitoringDashboard resources.
 */
export interface MonitoringDashboardState {
    /**
     * The JSON representation of a dashboard, following the format at
     * https://cloud.google.com/monitoring/api/ref_v3/rest/v1/projects.dashboards.
     */
    dashboardJson?: pulumi.Input<string>;
    /**
     * The ID of the project in which the resource belongs. If it is not provided, the provider project is used.
     */
    project?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.MonitoringDashboardTimeouts>;
}

/**
 * The set of arguments for constructing a MonitoringDashboard resource.
 */
export interface MonitoringDashboardArgs {
    /**
     * The JSON representation of a dashboard, following the format at
     * https://cloud.google.com/monitoring/api/ref_v3/rest/v1/projects.dashboards.
     */
    dashboardJson: pulumi.Input<string>;
    /**
     * The ID of the project in which the resource belongs. If it is not provided, the provider project is used.
     */
    project?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.MonitoringDashboardTimeouts>;
}
