// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class PaymentcryptographyAlias extends pulumi.CustomResource {
    /**
     * Get an existing PaymentcryptographyAlias resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: PaymentcryptographyAliasState, opts?: pulumi.CustomResourceOptions): PaymentcryptographyAlias {
        return new PaymentcryptographyAlias(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'awscc:index/paymentcryptographyAlias:PaymentcryptographyAlias';

    /**
     * Returns true if the given object is an instance of PaymentcryptographyAlias.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is PaymentcryptographyAlias {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === PaymentcryptographyAlias.__pulumiType;
    }

    public readonly aliasName!: pulumi.Output<string>;
    public readonly keyArn!: pulumi.Output<string>;

    /**
     * Create a PaymentcryptographyAlias resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PaymentcryptographyAliasArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: PaymentcryptographyAliasArgs | PaymentcryptographyAliasState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as PaymentcryptographyAliasState | undefined;
            resourceInputs["aliasName"] = state ? state.aliasName : undefined;
            resourceInputs["keyArn"] = state ? state.keyArn : undefined;
        } else {
            const args = argsOrState as PaymentcryptographyAliasArgs | undefined;
            if ((!args || args.aliasName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'aliasName'");
            }
            resourceInputs["aliasName"] = args ? args.aliasName : undefined;
            resourceInputs["keyArn"] = args ? args.keyArn : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(PaymentcryptographyAlias.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering PaymentcryptographyAlias resources.
 */
export interface PaymentcryptographyAliasState {
    aliasName?: pulumi.Input<string>;
    keyArn?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a PaymentcryptographyAlias resource.
 */
export interface PaymentcryptographyAliasArgs {
    aliasName: pulumi.Input<string>;
    keyArn?: pulumi.Input<string>;
}
