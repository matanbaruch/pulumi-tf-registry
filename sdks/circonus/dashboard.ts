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
    public static readonly __pulumiType = 'circonus:index/dashboard:Dashboard';

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

    public readonly gridLayout!: pulumi.Output<{[key: string]: number}>;
    public readonly options!: pulumi.Output<outputs.DashboardOption[]>;
    public readonly shared!: pulumi.Output<boolean | undefined>;
    /**
     * The title of the dashboard.
     */
    public readonly title!: pulumi.Output<string>;
    /**
     * The uuid of the dashboard.
     */
    public /*out*/ readonly uuid!: pulumi.Output<string>;
    public readonly widgets!: pulumi.Output<outputs.DashboardWidget[]>;

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
            resourceInputs["gridLayout"] = state ? state.gridLayout : undefined;
            resourceInputs["options"] = state ? state.options : undefined;
            resourceInputs["shared"] = state ? state.shared : undefined;
            resourceInputs["title"] = state ? state.title : undefined;
            resourceInputs["uuid"] = state ? state.uuid : undefined;
            resourceInputs["widgets"] = state ? state.widgets : undefined;
        } else {
            const args = argsOrState as DashboardArgs | undefined;
            if ((!args || args.gridLayout === undefined) && !opts.urn) {
                throw new Error("Missing required property 'gridLayout'");
            }
            if ((!args || args.options === undefined) && !opts.urn) {
                throw new Error("Missing required property 'options'");
            }
            if ((!args || args.title === undefined) && !opts.urn) {
                throw new Error("Missing required property 'title'");
            }
            if ((!args || args.widgets === undefined) && !opts.urn) {
                throw new Error("Missing required property 'widgets'");
            }
            resourceInputs["gridLayout"] = args ? args.gridLayout : undefined;
            resourceInputs["options"] = args ? args.options : undefined;
            resourceInputs["shared"] = args ? args.shared : undefined;
            resourceInputs["title"] = args ? args.title : undefined;
            resourceInputs["widgets"] = args ? args.widgets : undefined;
            resourceInputs["uuid"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Dashboard.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Dashboard resources.
 */
export interface DashboardState {
    gridLayout?: pulumi.Input<{[key: string]: pulumi.Input<number>}>;
    options?: pulumi.Input<pulumi.Input<inputs.DashboardOption>[]>;
    shared?: pulumi.Input<boolean>;
    /**
     * The title of the dashboard.
     */
    title?: pulumi.Input<string>;
    /**
     * The uuid of the dashboard.
     */
    uuid?: pulumi.Input<string>;
    widgets?: pulumi.Input<pulumi.Input<inputs.DashboardWidget>[]>;
}

/**
 * The set of arguments for constructing a Dashboard resource.
 */
export interface DashboardArgs {
    gridLayout: pulumi.Input<{[key: string]: pulumi.Input<number>}>;
    options: pulumi.Input<pulumi.Input<inputs.DashboardOption>[]>;
    shared?: pulumi.Input<boolean>;
    /**
     * The title of the dashboard.
     */
    title: pulumi.Input<string>;
    widgets: pulumi.Input<pulumi.Input<inputs.DashboardWidget>[]>;
}
