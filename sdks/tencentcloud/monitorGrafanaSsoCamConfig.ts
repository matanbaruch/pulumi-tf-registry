// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class MonitorGrafanaSsoCamConfig extends pulumi.CustomResource {
    /**
     * Get an existing MonitorGrafanaSsoCamConfig resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: MonitorGrafanaSsoCamConfigState, opts?: pulumi.CustomResourceOptions): MonitorGrafanaSsoCamConfig {
        return new MonitorGrafanaSsoCamConfig(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'tencentcloud:index/monitorGrafanaSsoCamConfig:MonitorGrafanaSsoCamConfig';

    /**
     * Returns true if the given object is an instance of MonitorGrafanaSsoCamConfig.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is MonitorGrafanaSsoCamConfig {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === MonitorGrafanaSsoCamConfig.__pulumiType;
    }

    /**
     * Whether to enable the CAM authorization: `true` for enabling; `false` for disabling.
     */
    public readonly enableSsoCamCheck!: pulumi.Output<boolean>;
    /**
     * Grafana instance ID.
     */
    public readonly instanceId!: pulumi.Output<string>;

    /**
     * Create a MonitorGrafanaSsoCamConfig resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: MonitorGrafanaSsoCamConfigArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: MonitorGrafanaSsoCamConfigArgs | MonitorGrafanaSsoCamConfigState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as MonitorGrafanaSsoCamConfigState | undefined;
            resourceInputs["enableSsoCamCheck"] = state ? state.enableSsoCamCheck : undefined;
            resourceInputs["instanceId"] = state ? state.instanceId : undefined;
        } else {
            const args = argsOrState as MonitorGrafanaSsoCamConfigArgs | undefined;
            if ((!args || args.enableSsoCamCheck === undefined) && !opts.urn) {
                throw new Error("Missing required property 'enableSsoCamCheck'");
            }
            if ((!args || args.instanceId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'instanceId'");
            }
            resourceInputs["enableSsoCamCheck"] = args ? args.enableSsoCamCheck : undefined;
            resourceInputs["instanceId"] = args ? args.instanceId : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(MonitorGrafanaSsoCamConfig.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering MonitorGrafanaSsoCamConfig resources.
 */
export interface MonitorGrafanaSsoCamConfigState {
    /**
     * Whether to enable the CAM authorization: `true` for enabling; `false` for disabling.
     */
    enableSsoCamCheck?: pulumi.Input<boolean>;
    /**
     * Grafana instance ID.
     */
    instanceId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a MonitorGrafanaSsoCamConfig resource.
 */
export interface MonitorGrafanaSsoCamConfigArgs {
    /**
     * Whether to enable the CAM authorization: `true` for enabling; `false` for disabling.
     */
    enableSsoCamCheck: pulumi.Input<boolean>;
    /**
     * Grafana instance ID.
     */
    instanceId: pulumi.Input<string>;
}
