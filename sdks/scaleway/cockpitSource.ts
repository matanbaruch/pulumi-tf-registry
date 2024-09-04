// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class CockpitSource extends pulumi.CustomResource {
    /**
     * Get an existing CockpitSource resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: CockpitSourceState, opts?: pulumi.CustomResourceOptions): CockpitSource {
        return new CockpitSource(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'scaleway:index/cockpitSource:CockpitSource';

    /**
     * Returns true if the given object is an instance of CockpitSource.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is CockpitSource {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === CockpitSource.__pulumiType;
    }

    /**
     * The date and time of the creation of the cockpit datasource
     */
    public /*out*/ readonly createdAt!: pulumi.Output<string>;
    /**
     * Name of the datasource
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The origin of the datasource
     */
    public /*out*/ readonly origin!: pulumi.Output<string>;
    /**
     * The project_id you want to attach the resource to
     */
    public readonly projectId!: pulumi.Output<string>;
    /**
     * The region you want to attach the resource to
     */
    public readonly region!: pulumi.Output<string>;
    /**
     * Indicates whether the data source is synchronized with Grafana
     */
    public /*out*/ readonly synchronizedWithGrafana!: pulumi.Output<boolean>;
    public readonly timeouts!: pulumi.Output<outputs.CockpitSourceTimeouts | undefined>;
    /**
     * The type of the datasource
     */
    public readonly type!: pulumi.Output<string | undefined>;
    /**
     * The date and time of the last update of the cockpit datasource
     */
    public /*out*/ readonly updatedAt!: pulumi.Output<string>;
    /**
     * The URL of the datasource
     */
    public /*out*/ readonly url!: pulumi.Output<string>;

    /**
     * Create a CockpitSource resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: CockpitSourceArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: CockpitSourceArgs | CockpitSourceState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as CockpitSourceState | undefined;
            resourceInputs["createdAt"] = state ? state.createdAt : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["origin"] = state ? state.origin : undefined;
            resourceInputs["projectId"] = state ? state.projectId : undefined;
            resourceInputs["region"] = state ? state.region : undefined;
            resourceInputs["synchronizedWithGrafana"] = state ? state.synchronizedWithGrafana : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["type"] = state ? state.type : undefined;
            resourceInputs["updatedAt"] = state ? state.updatedAt : undefined;
            resourceInputs["url"] = state ? state.url : undefined;
        } else {
            const args = argsOrState as CockpitSourceArgs | undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["projectId"] = args ? args.projectId : undefined;
            resourceInputs["region"] = args ? args.region : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["type"] = args ? args.type : undefined;
            resourceInputs["createdAt"] = undefined /*out*/;
            resourceInputs["origin"] = undefined /*out*/;
            resourceInputs["synchronizedWithGrafana"] = undefined /*out*/;
            resourceInputs["updatedAt"] = undefined /*out*/;
            resourceInputs["url"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(CockpitSource.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering CockpitSource resources.
 */
export interface CockpitSourceState {
    /**
     * The date and time of the creation of the cockpit datasource
     */
    createdAt?: pulumi.Input<string>;
    /**
     * Name of the datasource
     */
    name?: pulumi.Input<string>;
    /**
     * The origin of the datasource
     */
    origin?: pulumi.Input<string>;
    /**
     * The project_id you want to attach the resource to
     */
    projectId?: pulumi.Input<string>;
    /**
     * The region you want to attach the resource to
     */
    region?: pulumi.Input<string>;
    /**
     * Indicates whether the data source is synchronized with Grafana
     */
    synchronizedWithGrafana?: pulumi.Input<boolean>;
    timeouts?: pulumi.Input<inputs.CockpitSourceTimeouts>;
    /**
     * The type of the datasource
     */
    type?: pulumi.Input<string>;
    /**
     * The date and time of the last update of the cockpit datasource
     */
    updatedAt?: pulumi.Input<string>;
    /**
     * The URL of the datasource
     */
    url?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a CockpitSource resource.
 */
export interface CockpitSourceArgs {
    /**
     * Name of the datasource
     */
    name?: pulumi.Input<string>;
    /**
     * The project_id you want to attach the resource to
     */
    projectId?: pulumi.Input<string>;
    /**
     * The region you want to attach the resource to
     */
    region?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.CockpitSourceTimeouts>;
    /**
     * The type of the datasource
     */
    type?: pulumi.Input<string>;
}
