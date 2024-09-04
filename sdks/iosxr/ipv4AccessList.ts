// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class Ipv4AccessList extends pulumi.CustomResource {
    /**
     * Get an existing Ipv4AccessList resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: Ipv4AccessListState, opts?: pulumi.CustomResourceOptions): Ipv4AccessList {
        return new Ipv4AccessList(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'iosxr:index/ipv4AccessList:Ipv4AccessList';

    /**
     * Returns true if the given object is an instance of Ipv4AccessList.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Ipv4AccessList {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Ipv4AccessList.__pulumiType;
    }

    /**
     * Access list name - maximum 64 characters
     */
    public readonly accessListName!: pulumi.Output<string>;
    /**
     * A device name from the provider configuration.
     */
    public readonly device!: pulumi.Output<string | undefined>;
    /**
     * access list entry
     */
    public readonly sequences!: pulumi.Output<outputs.Ipv4AccessListSequence[] | undefined>;

    /**
     * Create a Ipv4AccessList resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: Ipv4AccessListArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: Ipv4AccessListArgs | Ipv4AccessListState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as Ipv4AccessListState | undefined;
            resourceInputs["accessListName"] = state ? state.accessListName : undefined;
            resourceInputs["device"] = state ? state.device : undefined;
            resourceInputs["sequences"] = state ? state.sequences : undefined;
        } else {
            const args = argsOrState as Ipv4AccessListArgs | undefined;
            if ((!args || args.accessListName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'accessListName'");
            }
            resourceInputs["accessListName"] = args ? args.accessListName : undefined;
            resourceInputs["device"] = args ? args.device : undefined;
            resourceInputs["sequences"] = args ? args.sequences : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Ipv4AccessList.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Ipv4AccessList resources.
 */
export interface Ipv4AccessListState {
    /**
     * Access list name - maximum 64 characters
     */
    accessListName?: pulumi.Input<string>;
    /**
     * A device name from the provider configuration.
     */
    device?: pulumi.Input<string>;
    /**
     * access list entry
     */
    sequences?: pulumi.Input<pulumi.Input<inputs.Ipv4AccessListSequence>[]>;
}

/**
 * The set of arguments for constructing a Ipv4AccessList resource.
 */
export interface Ipv4AccessListArgs {
    /**
     * Access list name - maximum 64 characters
     */
    accessListName: pulumi.Input<string>;
    /**
     * A device name from the provider configuration.
     */
    device?: pulumi.Input<string>;
    /**
     * access list entry
     */
    sequences?: pulumi.Input<pulumi.Input<inputs.Ipv4AccessListSequence>[]>;
}
