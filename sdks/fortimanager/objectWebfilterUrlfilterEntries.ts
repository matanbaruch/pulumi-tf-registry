// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class ObjectWebfilterUrlfilterEntries extends pulumi.CustomResource {
    /**
     * Get an existing ObjectWebfilterUrlfilterEntries resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ObjectWebfilterUrlfilterEntriesState, opts?: pulumi.CustomResourceOptions): ObjectWebfilterUrlfilterEntries {
        return new ObjectWebfilterUrlfilterEntries(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'fortimanager:index/objectWebfilterUrlfilterEntries:ObjectWebfilterUrlfilterEntries';

    /**
     * Returns true if the given object is an instance of ObjectWebfilterUrlfilterEntries.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ObjectWebfilterUrlfilterEntries {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ObjectWebfilterUrlfilterEntries.__pulumiType;
    }

    public readonly action!: pulumi.Output<string>;
    public readonly adom!: pulumi.Output<string | undefined>;
    public readonly antiphishAction!: pulumi.Output<string>;
    public readonly dnsAddressFamily!: pulumi.Output<string>;
    public readonly exempts!: pulumi.Output<string[]>;
    public readonly fosid!: pulumi.Output<number | undefined>;
    public readonly referrerHost!: pulumi.Output<string | undefined>;
    public readonly scopetype!: pulumi.Output<string | undefined>;
    public readonly status!: pulumi.Output<string>;
    public readonly type!: pulumi.Output<string>;
    public readonly url!: pulumi.Output<string | undefined>;
    public readonly urlfilter!: pulumi.Output<string>;
    public readonly webProxyProfile!: pulumi.Output<string | undefined>;

    /**
     * Create a ObjectWebfilterUrlfilterEntries resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ObjectWebfilterUrlfilterEntriesArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ObjectWebfilterUrlfilterEntriesArgs | ObjectWebfilterUrlfilterEntriesState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ObjectWebfilterUrlfilterEntriesState | undefined;
            resourceInputs["action"] = state ? state.action : undefined;
            resourceInputs["adom"] = state ? state.adom : undefined;
            resourceInputs["antiphishAction"] = state ? state.antiphishAction : undefined;
            resourceInputs["dnsAddressFamily"] = state ? state.dnsAddressFamily : undefined;
            resourceInputs["exempts"] = state ? state.exempts : undefined;
            resourceInputs["fosid"] = state ? state.fosid : undefined;
            resourceInputs["referrerHost"] = state ? state.referrerHost : undefined;
            resourceInputs["scopetype"] = state ? state.scopetype : undefined;
            resourceInputs["status"] = state ? state.status : undefined;
            resourceInputs["type"] = state ? state.type : undefined;
            resourceInputs["url"] = state ? state.url : undefined;
            resourceInputs["urlfilter"] = state ? state.urlfilter : undefined;
            resourceInputs["webProxyProfile"] = state ? state.webProxyProfile : undefined;
        } else {
            const args = argsOrState as ObjectWebfilterUrlfilterEntriesArgs | undefined;
            if ((!args || args.urlfilter === undefined) && !opts.urn) {
                throw new Error("Missing required property 'urlfilter'");
            }
            resourceInputs["action"] = args ? args.action : undefined;
            resourceInputs["adom"] = args ? args.adom : undefined;
            resourceInputs["antiphishAction"] = args ? args.antiphishAction : undefined;
            resourceInputs["dnsAddressFamily"] = args ? args.dnsAddressFamily : undefined;
            resourceInputs["exempts"] = args ? args.exempts : undefined;
            resourceInputs["fosid"] = args ? args.fosid : undefined;
            resourceInputs["referrerHost"] = args ? args.referrerHost : undefined;
            resourceInputs["scopetype"] = args ? args.scopetype : undefined;
            resourceInputs["status"] = args ? args.status : undefined;
            resourceInputs["type"] = args ? args.type : undefined;
            resourceInputs["url"] = args ? args.url : undefined;
            resourceInputs["urlfilter"] = args ? args.urlfilter : undefined;
            resourceInputs["webProxyProfile"] = args ? args.webProxyProfile : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ObjectWebfilterUrlfilterEntries.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ObjectWebfilterUrlfilterEntries resources.
 */
export interface ObjectWebfilterUrlfilterEntriesState {
    action?: pulumi.Input<string>;
    adom?: pulumi.Input<string>;
    antiphishAction?: pulumi.Input<string>;
    dnsAddressFamily?: pulumi.Input<string>;
    exempts?: pulumi.Input<pulumi.Input<string>[]>;
    fosid?: pulumi.Input<number>;
    referrerHost?: pulumi.Input<string>;
    scopetype?: pulumi.Input<string>;
    status?: pulumi.Input<string>;
    type?: pulumi.Input<string>;
    url?: pulumi.Input<string>;
    urlfilter?: pulumi.Input<string>;
    webProxyProfile?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a ObjectWebfilterUrlfilterEntries resource.
 */
export interface ObjectWebfilterUrlfilterEntriesArgs {
    action?: pulumi.Input<string>;
    adom?: pulumi.Input<string>;
    antiphishAction?: pulumi.Input<string>;
    dnsAddressFamily?: pulumi.Input<string>;
    exempts?: pulumi.Input<pulumi.Input<string>[]>;
    fosid?: pulumi.Input<number>;
    referrerHost?: pulumi.Input<string>;
    scopetype?: pulumi.Input<string>;
    status?: pulumi.Input<string>;
    type?: pulumi.Input<string>;
    url?: pulumi.Input<string>;
    urlfilter: pulumi.Input<string>;
    webProxyProfile?: pulumi.Input<string>;
}
