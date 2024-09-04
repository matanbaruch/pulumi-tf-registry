// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class AcmpcaPolicy extends pulumi.CustomResource {
    /**
     * Get an existing AcmpcaPolicy resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: AcmpcaPolicyState, opts?: pulumi.CustomResourceOptions): AcmpcaPolicy {
        return new AcmpcaPolicy(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aws:index/acmpcaPolicy:AcmpcaPolicy';

    /**
     * Returns true if the given object is an instance of AcmpcaPolicy.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is AcmpcaPolicy {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === AcmpcaPolicy.__pulumiType;
    }

    public readonly policy!: pulumi.Output<string>;
    public readonly resourceArn!: pulumi.Output<string>;

    /**
     * Create a AcmpcaPolicy resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AcmpcaPolicyArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: AcmpcaPolicyArgs | AcmpcaPolicyState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as AcmpcaPolicyState | undefined;
            resourceInputs["policy"] = state ? state.policy : undefined;
            resourceInputs["resourceArn"] = state ? state.resourceArn : undefined;
        } else {
            const args = argsOrState as AcmpcaPolicyArgs | undefined;
            if ((!args || args.policy === undefined) && !opts.urn) {
                throw new Error("Missing required property 'policy'");
            }
            if ((!args || args.resourceArn === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceArn'");
            }
            resourceInputs["policy"] = args ? args.policy : undefined;
            resourceInputs["resourceArn"] = args ? args.resourceArn : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(AcmpcaPolicy.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering AcmpcaPolicy resources.
 */
export interface AcmpcaPolicyState {
    policy?: pulumi.Input<string>;
    resourceArn?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a AcmpcaPolicy resource.
 */
export interface AcmpcaPolicyArgs {
    policy: pulumi.Input<string>;
    resourceArn: pulumi.Input<string>;
}
