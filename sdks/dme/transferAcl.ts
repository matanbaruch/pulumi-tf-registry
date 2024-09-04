// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class TransferAcl extends pulumi.CustomResource {
    /**
     * Get an existing TransferAcl resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: TransferAclState, opts?: pulumi.CustomResourceOptions): TransferAcl {
        return new TransferAcl(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'dme:index/transferAcl:TransferAcl';

    /**
     * Returns true if the given object is an instance of TransferAcl.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is TransferAcl {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === TransferAcl.__pulumiType;
    }

    public readonly ips!: pulumi.Output<string[]>;
    public readonly name!: pulumi.Output<string>;

    /**
     * Create a TransferAcl resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: TransferAclArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: TransferAclArgs | TransferAclState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as TransferAclState | undefined;
            resourceInputs["ips"] = state ? state.ips : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
        } else {
            const args = argsOrState as TransferAclArgs | undefined;
            if ((!args || args.ips === undefined) && !opts.urn) {
                throw new Error("Missing required property 'ips'");
            }
            resourceInputs["ips"] = args ? args.ips : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(TransferAcl.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering TransferAcl resources.
 */
export interface TransferAclState {
    ips?: pulumi.Input<pulumi.Input<string>[]>;
    name?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a TransferAcl resource.
 */
export interface TransferAclArgs {
    ips: pulumi.Input<pulumi.Input<string>[]>;
    name?: pulumi.Input<string>;
}
