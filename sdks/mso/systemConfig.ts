// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class SystemConfig extends pulumi.CustomResource {
    /**
     * Get an existing SystemConfig resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SystemConfigState, opts?: pulumi.CustomResourceOptions): SystemConfig {
        return new SystemConfig(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'mso:index/systemConfig:SystemConfig';

    /**
     * Returns true if the given object is an instance of SystemConfig.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SystemConfig {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SystemConfig.__pulumiType;
    }

    public readonly alias!: pulumi.Output<string>;
    public readonly banner!: pulumi.Output<outputs.SystemConfigBanner | undefined>;
    public readonly changeControl!: pulumi.Output<{[key: string]: string}>;

    /**
     * Create a SystemConfig resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: SystemConfigArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SystemConfigArgs | SystemConfigState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SystemConfigState | undefined;
            resourceInputs["alias"] = state ? state.alias : undefined;
            resourceInputs["banner"] = state ? state.banner : undefined;
            resourceInputs["changeControl"] = state ? state.changeControl : undefined;
        } else {
            const args = argsOrState as SystemConfigArgs | undefined;
            resourceInputs["alias"] = args ? args.alias : undefined;
            resourceInputs["banner"] = args ? args.banner : undefined;
            resourceInputs["changeControl"] = args ? args.changeControl : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(SystemConfig.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering SystemConfig resources.
 */
export interface SystemConfigState {
    alias?: pulumi.Input<string>;
    banner?: pulumi.Input<inputs.SystemConfigBanner>;
    changeControl?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}

/**
 * The set of arguments for constructing a SystemConfig resource.
 */
export interface SystemConfigArgs {
    alias?: pulumi.Input<string>;
    banner?: pulumi.Input<inputs.SystemConfigBanner>;
    changeControl?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}
