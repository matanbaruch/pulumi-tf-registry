// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class Ec2PrefixList extends pulumi.CustomResource {
    /**
     * Get an existing Ec2PrefixList resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: Ec2PrefixListState, opts?: pulumi.CustomResourceOptions): Ec2PrefixList {
        return new Ec2PrefixList(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'awscc:index/ec2PrefixList:Ec2PrefixList';

    /**
     * Returns true if the given object is an instance of Ec2PrefixList.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Ec2PrefixList {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Ec2PrefixList.__pulumiType;
    }

    /**
     * Ip Version of Prefix List.
     */
    public readonly addressFamily!: pulumi.Output<string>;
    /**
     * The Amazon Resource Name (ARN) of the Prefix List.
     */
    public /*out*/ readonly arn!: pulumi.Output<string>;
    /**
     * Entries of Prefix List.
     */
    public readonly entries!: pulumi.Output<outputs.Ec2PrefixListEntry[]>;
    /**
     * Max Entries of Prefix List.
     */
    public readonly maxEntries!: pulumi.Output<number>;
    /**
     * Owner Id of Prefix List.
     */
    public /*out*/ readonly ownerId!: pulumi.Output<string>;
    /**
     * Id of Prefix List.
     */
    public /*out*/ readonly prefixListId!: pulumi.Output<string>;
    /**
     * Name of Prefix List.
     */
    public readonly prefixListName!: pulumi.Output<string>;
    /**
     * Tags for Prefix List
     */
    public readonly tags!: pulumi.Output<outputs.Ec2PrefixListTag[]>;
    /**
     * Version of Prefix List.
     */
    public /*out*/ readonly version!: pulumi.Output<number>;

    /**
     * Create a Ec2PrefixList resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: Ec2PrefixListArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: Ec2PrefixListArgs | Ec2PrefixListState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as Ec2PrefixListState | undefined;
            resourceInputs["addressFamily"] = state ? state.addressFamily : undefined;
            resourceInputs["arn"] = state ? state.arn : undefined;
            resourceInputs["entries"] = state ? state.entries : undefined;
            resourceInputs["maxEntries"] = state ? state.maxEntries : undefined;
            resourceInputs["ownerId"] = state ? state.ownerId : undefined;
            resourceInputs["prefixListId"] = state ? state.prefixListId : undefined;
            resourceInputs["prefixListName"] = state ? state.prefixListName : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["version"] = state ? state.version : undefined;
        } else {
            const args = argsOrState as Ec2PrefixListArgs | undefined;
            if ((!args || args.addressFamily === undefined) && !opts.urn) {
                throw new Error("Missing required property 'addressFamily'");
            }
            if ((!args || args.prefixListName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'prefixListName'");
            }
            resourceInputs["addressFamily"] = args ? args.addressFamily : undefined;
            resourceInputs["entries"] = args ? args.entries : undefined;
            resourceInputs["maxEntries"] = args ? args.maxEntries : undefined;
            resourceInputs["prefixListName"] = args ? args.prefixListName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["arn"] = undefined /*out*/;
            resourceInputs["ownerId"] = undefined /*out*/;
            resourceInputs["prefixListId"] = undefined /*out*/;
            resourceInputs["version"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Ec2PrefixList.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Ec2PrefixList resources.
 */
export interface Ec2PrefixListState {
    /**
     * Ip Version of Prefix List.
     */
    addressFamily?: pulumi.Input<string>;
    /**
     * The Amazon Resource Name (ARN) of the Prefix List.
     */
    arn?: pulumi.Input<string>;
    /**
     * Entries of Prefix List.
     */
    entries?: pulumi.Input<pulumi.Input<inputs.Ec2PrefixListEntry>[]>;
    /**
     * Max Entries of Prefix List.
     */
    maxEntries?: pulumi.Input<number>;
    /**
     * Owner Id of Prefix List.
     */
    ownerId?: pulumi.Input<string>;
    /**
     * Id of Prefix List.
     */
    prefixListId?: pulumi.Input<string>;
    /**
     * Name of Prefix List.
     */
    prefixListName?: pulumi.Input<string>;
    /**
     * Tags for Prefix List
     */
    tags?: pulumi.Input<pulumi.Input<inputs.Ec2PrefixListTag>[]>;
    /**
     * Version of Prefix List.
     */
    version?: pulumi.Input<number>;
}

/**
 * The set of arguments for constructing a Ec2PrefixList resource.
 */
export interface Ec2PrefixListArgs {
    /**
     * Ip Version of Prefix List.
     */
    addressFamily: pulumi.Input<string>;
    /**
     * Entries of Prefix List.
     */
    entries?: pulumi.Input<pulumi.Input<inputs.Ec2PrefixListEntry>[]>;
    /**
     * Max Entries of Prefix List.
     */
    maxEntries?: pulumi.Input<number>;
    /**
     * Name of Prefix List.
     */
    prefixListName: pulumi.Input<string>;
    /**
     * Tags for Prefix List
     */
    tags?: pulumi.Input<pulumi.Input<inputs.Ec2PrefixListTag>[]>;
}
