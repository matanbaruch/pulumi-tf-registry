// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class RecordTlsa extends pulumi.CustomResource {
    /**
     * Get an existing RecordTlsa resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: RecordTlsaState, opts?: pulumi.CustomResourceOptions): RecordTlsa {
        return new RecordTlsa(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'njalla:index/recordTlsa:RecordTlsa';

    /**
     * Returns true if the given object is an instance of RecordTlsa.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is RecordTlsa {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === RecordTlsa.__pulumiType;
    }

    /**
     * Content for the record.
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
     * Create a RecordTlsa resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: RecordTlsaArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: RecordTlsaArgs | RecordTlsaState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as RecordTlsaState | undefined;
            resourceInputs["content"] = state ? state.content : undefined;
            resourceInputs["domain"] = state ? state.domain : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["ttl"] = state ? state.ttl : undefined;
        } else {
            const args = argsOrState as RecordTlsaArgs | undefined;
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
        super(RecordTlsa.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering RecordTlsa resources.
 */
export interface RecordTlsaState {
    /**
     * Content for the record.
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
 * The set of arguments for constructing a RecordTlsa resource.
 */
export interface RecordTlsaArgs {
    /**
     * Content for the record.
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
