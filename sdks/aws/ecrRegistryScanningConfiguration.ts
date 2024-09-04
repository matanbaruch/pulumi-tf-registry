// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class EcrRegistryScanningConfiguration extends pulumi.CustomResource {
    /**
     * Get an existing EcrRegistryScanningConfiguration resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: EcrRegistryScanningConfigurationState, opts?: pulumi.CustomResourceOptions): EcrRegistryScanningConfiguration {
        return new EcrRegistryScanningConfiguration(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aws:index/ecrRegistryScanningConfiguration:EcrRegistryScanningConfiguration';

    /**
     * Returns true if the given object is an instance of EcrRegistryScanningConfiguration.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is EcrRegistryScanningConfiguration {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === EcrRegistryScanningConfiguration.__pulumiType;
    }

    public /*out*/ readonly registryId!: pulumi.Output<string>;
    public readonly rules!: pulumi.Output<outputs.EcrRegistryScanningConfigurationRule[] | undefined>;
    public readonly scanType!: pulumi.Output<string>;

    /**
     * Create a EcrRegistryScanningConfiguration resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: EcrRegistryScanningConfigurationArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: EcrRegistryScanningConfigurationArgs | EcrRegistryScanningConfigurationState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as EcrRegistryScanningConfigurationState | undefined;
            resourceInputs["registryId"] = state ? state.registryId : undefined;
            resourceInputs["rules"] = state ? state.rules : undefined;
            resourceInputs["scanType"] = state ? state.scanType : undefined;
        } else {
            const args = argsOrState as EcrRegistryScanningConfigurationArgs | undefined;
            if ((!args || args.scanType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'scanType'");
            }
            resourceInputs["rules"] = args ? args.rules : undefined;
            resourceInputs["scanType"] = args ? args.scanType : undefined;
            resourceInputs["registryId"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(EcrRegistryScanningConfiguration.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering EcrRegistryScanningConfiguration resources.
 */
export interface EcrRegistryScanningConfigurationState {
    registryId?: pulumi.Input<string>;
    rules?: pulumi.Input<pulumi.Input<inputs.EcrRegistryScanningConfigurationRule>[]>;
    scanType?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a EcrRegistryScanningConfiguration resource.
 */
export interface EcrRegistryScanningConfigurationArgs {
    rules?: pulumi.Input<pulumi.Input<inputs.EcrRegistryScanningConfigurationRule>[]>;
    scanType: pulumi.Input<string>;
}
