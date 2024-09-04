// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class RecordA extends pulumi.CustomResource {
    /**
     * Get an existing RecordA resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: RecordAState, opts?: pulumi.CustomResourceOptions): RecordA {
        return new RecordA(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'njalla:index/recordA:RecordA';

    /**
     * Returns true if the given object is an instance of RecordA.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is RecordA {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === RecordA.__pulumiType;
    }

    /**
     * IPv4 address for the record.
     */
    public readonly content!: pulumi.Output<string>;
    /**
     * Specifies the domain this record will be applied to.
     */
    public readonly domain!: pulumi.Output<string>;
    /**
     * Name for the record.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * TTL for the record.
     */
    public readonly ttl!: pulumi.Output<number>;

    /**
     * Create a RecordA resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: RecordAArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: RecordAArgs | RecordAState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as RecordAState | undefined;
            resourceInputs["content"] = state ? state.content : undefined;
            resourceInputs["domain"] = state ? state.domain : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["ttl"] = state ? state.ttl : undefined;
        } else {
            const args = argsOrState as RecordAArgs | undefined;
            if ((!args || args.content === undefined) && !opts.urn) {
                throw new Error("Missing required property 'content'");
            }
            if ((!args || args.domain === undefined) && !opts.urn) {
                throw new Error("Missing required property 'domain'");
            }
            if ((!args || args.ttl === undefined) && !opts.urn) {
                throw new Error("Missing required property 'ttl'");
            }
            resourceInputs["content"] = args ? args.content : undefined;
            resourceInputs["domain"] = args ? args.domain : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["ttl"] = args ? args.ttl : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(RecordA.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering RecordA resources.
 */
export interface RecordAState {
    /**
     * IPv4 address for the record.
     */
    content?: pulumi.Input<string>;
    /**
     * Specifies the domain this record will be applied to.
     */
    domain?: pulumi.Input<string>;
    /**
     * Name for the record.
     */
    name?: pulumi.Input<string>;
    /**
     * TTL for the record.
     */
    ttl?: pulumi.Input<number>;
}

/**
 * The set of arguments for constructing a RecordA resource.
 */
export interface RecordAArgs {
    /**
     * IPv4 address for the record.
     */
    content: pulumi.Input<string>;
    /**
     * Specifies the domain this record will be applied to.
     */
    domain: pulumi.Input<string>;
    /**
     * Name for the record.
     */
    name?: pulumi.Input<string>;
    /**
     * TTL for the record.
     */
    ttl: pulumi.Input<number>;
}
