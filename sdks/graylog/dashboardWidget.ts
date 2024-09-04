// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class DashboardWidget extends pulumi.CustomResource {
    /**
     * Get an existing DashboardWidget resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DashboardWidgetState, opts?: pulumi.CustomResourceOptions): DashboardWidget {
        return new DashboardWidget(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'graylog:index/dashboardWidget:DashboardWidget';

    /**
     * Returns true if the given object is an instance of DashboardWidget.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DashboardWidget {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DashboardWidget.__pulumiType;
    }

    public readonly cacheTime!: pulumi.Output<number>;
    public readonly config!: pulumi.Output<string>;
    public readonly creatorUserId!: pulumi.Output<string>;
    public readonly dashboardId!: pulumi.Output<string>;
    public readonly description!: pulumi.Output<string>;
    public readonly type!: pulumi.Output<string>;
    public readonly widgetId!: pulumi.Output<string>;

    /**
     * Create a DashboardWidget resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DashboardWidgetArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: DashboardWidgetArgs | DashboardWidgetState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as DashboardWidgetState | undefined;
            resourceInputs["cacheTime"] = state ? state.cacheTime : undefined;
            resourceInputs["config"] = state ? state.config : undefined;
            resourceInputs["creatorUserId"] = state ? state.creatorUserId : undefined;
            resourceInputs["dashboardId"] = state ? state.dashboardId : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["type"] = state ? state.type : undefined;
            resourceInputs["widgetId"] = state ? state.widgetId : undefined;
        } else {
            const args = argsOrState as DashboardWidgetArgs | undefined;
            if ((!args || args.config === undefined) && !opts.urn) {
                throw new Error("Missing required property 'config'");
            }
            if ((!args || args.dashboardId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'dashboardId'");
            }
            if ((!args || args.description === undefined) && !opts.urn) {
                throw new Error("Missing required property 'description'");
            }
            if ((!args || args.type === undefined) && !opts.urn) {
                throw new Error("Missing required property 'type'");
            }
            resourceInputs["cacheTime"] = args ? args.cacheTime : undefined;
            resourceInputs["config"] = args ? args.config : undefined;
            resourceInputs["creatorUserId"] = args ? args.creatorUserId : undefined;
            resourceInputs["dashboardId"] = args ? args.dashboardId : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["type"] = args ? args.type : undefined;
            resourceInputs["widgetId"] = args ? args.widgetId : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(DashboardWidget.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering DashboardWidget resources.
 */
export interface DashboardWidgetState {
    cacheTime?: pulumi.Input<number>;
    config?: pulumi.Input<string>;
    creatorUserId?: pulumi.Input<string>;
    dashboardId?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    type?: pulumi.Input<string>;
    widgetId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a DashboardWidget resource.
 */
export interface DashboardWidgetArgs {
    cacheTime?: pulumi.Input<number>;
    config: pulumi.Input<string>;
    creatorUserId?: pulumi.Input<string>;
    dashboardId: pulumi.Input<string>;
    description: pulumi.Input<string>;
    type: pulumi.Input<string>;
    widgetId?: pulumi.Input<string>;
}
