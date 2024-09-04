// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class SpannerInstanceConfig extends pulumi.CustomResource {
    /**
     * Get an existing SpannerInstanceConfig resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SpannerInstanceConfigState, opts?: pulumi.CustomResourceOptions): SpannerInstanceConfig {
        return new SpannerInstanceConfig(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'google:index/spannerInstanceConfig:SpannerInstanceConfig';

    /**
     * Returns true if the given object is an instance of SpannerInstanceConfig.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SpannerInstanceConfig {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SpannerInstanceConfig.__pulumiType;
    }

    /**
     * Base configuration name, e.g. nam3, based on which this configuration is created. Only set for user managed
     * configurations. baseConfig must refer to a configuration of type GOOGLE_MANAGED in the same project as this
     * configuration.
     */
    public readonly baseConfig!: pulumi.Output<string>;
    /**
     * Output only. Whether this instance config is a Google or User Managed Configuration.
     */
    public /*out*/ readonly configType!: pulumi.Output<string>;
    /**
     * The name of this instance configuration as it appears in UIs.
     */
    public readonly displayName!: pulumi.Output<string>;
    public /*out*/ readonly effectiveLabels!: pulumi.Output<{[key: string]: string}>;
    /**
     * An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.
     * **Note**: This field is non-authoritative, and will only manage the labels present in your configuration. Please refer
     * to the field 'effective_labels' for all of the labels present on the resource.
     */
    public readonly labels!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * A unique identifier for the instance configuration. Values are of the form
     * projects/<project>/instanceConfigs/[a-z][-a-z0-9]*
     */
    public readonly name!: pulumi.Output<string>;
    public readonly project!: pulumi.Output<string>;
    /**
     * The geographic placement of nodes in this instance configuration and their replication properties.
     */
    public readonly replicas!: pulumi.Output<outputs.SpannerInstanceConfigReplica[]>;
    /**
     * The combination of labels configured directly on the resource and default labels configured on the provider.
     */
    public /*out*/ readonly terraformLabels!: pulumi.Output<{[key: string]: string}>;
    public readonly timeouts!: pulumi.Output<outputs.SpannerInstanceConfigTimeouts | undefined>;

    /**
     * Create a SpannerInstanceConfig resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SpannerInstanceConfigArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SpannerInstanceConfigArgs | SpannerInstanceConfigState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SpannerInstanceConfigState | undefined;
            resourceInputs["baseConfig"] = state ? state.baseConfig : undefined;
            resourceInputs["configType"] = state ? state.configType : undefined;
            resourceInputs["displayName"] = state ? state.displayName : undefined;
            resourceInputs["effectiveLabels"] = state ? state.effectiveLabels : undefined;
            resourceInputs["labels"] = state ? state.labels : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["project"] = state ? state.project : undefined;
            resourceInputs["replicas"] = state ? state.replicas : undefined;
            resourceInputs["terraformLabels"] = state ? state.terraformLabels : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as SpannerInstanceConfigArgs | undefined;
            if ((!args || args.displayName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'displayName'");
            }
            if ((!args || args.replicas === undefined) && !opts.urn) {
                throw new Error("Missing required property 'replicas'");
            }
            resourceInputs["baseConfig"] = args ? args.baseConfig : undefined;
            resourceInputs["displayName"] = args ? args.displayName : undefined;
            resourceInputs["labels"] = args ? args.labels : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["project"] = args ? args.project : undefined;
            resourceInputs["replicas"] = args ? args.replicas : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["configType"] = undefined /*out*/;
            resourceInputs["effectiveLabels"] = undefined /*out*/;
            resourceInputs["terraformLabels"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(SpannerInstanceConfig.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering SpannerInstanceConfig resources.
 */
export interface SpannerInstanceConfigState {
    /**
     * Base configuration name, e.g. nam3, based on which this configuration is created. Only set for user managed
     * configurations. baseConfig must refer to a configuration of type GOOGLE_MANAGED in the same project as this
     * configuration.
     */
    baseConfig?: pulumi.Input<string>;
    /**
     * Output only. Whether this instance config is a Google or User Managed Configuration.
     */
    configType?: pulumi.Input<string>;
    /**
     * The name of this instance configuration as it appears in UIs.
     */
    displayName?: pulumi.Input<string>;
    effectiveLabels?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.
     * **Note**: This field is non-authoritative, and will only manage the labels present in your configuration. Please refer
     * to the field 'effective_labels' for all of the labels present on the resource.
     */
    labels?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * A unique identifier for the instance configuration. Values are of the form
     * projects/<project>/instanceConfigs/[a-z][-a-z0-9]*
     */
    name?: pulumi.Input<string>;
    project?: pulumi.Input<string>;
    /**
     * The geographic placement of nodes in this instance configuration and their replication properties.
     */
    replicas?: pulumi.Input<pulumi.Input<inputs.SpannerInstanceConfigReplica>[]>;
    /**
     * The combination of labels configured directly on the resource and default labels configured on the provider.
     */
    terraformLabels?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    timeouts?: pulumi.Input<inputs.SpannerInstanceConfigTimeouts>;
}

/**
 * The set of arguments for constructing a SpannerInstanceConfig resource.
 */
export interface SpannerInstanceConfigArgs {
    /**
     * Base configuration name, e.g. nam3, based on which this configuration is created. Only set for user managed
     * configurations. baseConfig must refer to a configuration of type GOOGLE_MANAGED in the same project as this
     * configuration.
     */
    baseConfig?: pulumi.Input<string>;
    /**
     * The name of this instance configuration as it appears in UIs.
     */
    displayName: pulumi.Input<string>;
    /**
     * An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.
     * **Note**: This field is non-authoritative, and will only manage the labels present in your configuration. Please refer
     * to the field 'effective_labels' for all of the labels present on the resource.
     */
    labels?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * A unique identifier for the instance configuration. Values are of the form
     * projects/<project>/instanceConfigs/[a-z][-a-z0-9]*
     */
    name?: pulumi.Input<string>;
    project?: pulumi.Input<string>;
    /**
     * The geographic placement of nodes in this instance configuration and their replication properties.
     */
    replicas: pulumi.Input<pulumi.Input<inputs.SpannerInstanceConfigReplica>[]>;
    timeouts?: pulumi.Input<inputs.SpannerInstanceConfigTimeouts>;
}
