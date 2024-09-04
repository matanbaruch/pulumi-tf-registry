// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class CatalogEntry extends pulumi.CustomResource {
    /**
     * Get an existing CatalogEntry resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: CatalogEntryState, opts?: pulumi.CustomResourceOptions): CatalogEntry {
        return new CatalogEntry(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'consul:index/catalogEntry:CatalogEntry';

    /**
     * Returns true if the given object is an instance of CatalogEntry.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is CatalogEntry {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === CatalogEntry.__pulumiType;
    }

    public readonly address!: pulumi.Output<string>;
    public readonly datacenter!: pulumi.Output<string>;
    public readonly node!: pulumi.Output<string>;
    public readonly services!: pulumi.Output<outputs.CatalogEntryService[] | undefined>;
    /**
     * @deprecated Deprecated
     */
    public readonly token!: pulumi.Output<string | undefined>;

    /**
     * Create a CatalogEntry resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: CatalogEntryArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: CatalogEntryArgs | CatalogEntryState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as CatalogEntryState | undefined;
            resourceInputs["address"] = state ? state.address : undefined;
            resourceInputs["datacenter"] = state ? state.datacenter : undefined;
            resourceInputs["node"] = state ? state.node : undefined;
            resourceInputs["services"] = state ? state.services : undefined;
            resourceInputs["token"] = state ? state.token : undefined;
        } else {
            const args = argsOrState as CatalogEntryArgs | undefined;
            if ((!args || args.address === undefined) && !opts.urn) {
                throw new Error("Missing required property 'address'");
            }
            if ((!args || args.node === undefined) && !opts.urn) {
                throw new Error("Missing required property 'node'");
            }
            resourceInputs["address"] = args ? args.address : undefined;
            resourceInputs["datacenter"] = args ? args.datacenter : undefined;
            resourceInputs["node"] = args ? args.node : undefined;
            resourceInputs["services"] = args ? args.services : undefined;
            resourceInputs["token"] = args?.token ? pulumi.secret(args.token) : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["token"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(CatalogEntry.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering CatalogEntry resources.
 */
export interface CatalogEntryState {
    address?: pulumi.Input<string>;
    datacenter?: pulumi.Input<string>;
    node?: pulumi.Input<string>;
    services?: pulumi.Input<pulumi.Input<inputs.CatalogEntryService>[]>;
    /**
     * @deprecated Deprecated
     */
    token?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a CatalogEntry resource.
 */
export interface CatalogEntryArgs {
    address: pulumi.Input<string>;
    datacenter?: pulumi.Input<string>;
    node: pulumi.Input<string>;
    services?: pulumi.Input<pulumi.Input<inputs.CatalogEntryService>[]>;
    /**
     * @deprecated Deprecated
     */
    token?: pulumi.Input<string>;
}
