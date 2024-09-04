// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class DnsRecord extends pulumi.CustomResource {
    /**
     * Get an existing DnsRecord resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DnsRecordState, opts?: pulumi.CustomResourceOptions): DnsRecord {
        return new DnsRecord(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'ionoscloud:index/dnsRecord:DnsRecord';

    /**
     * Returns true if the given object is an instance of DnsRecord.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DnsRecord {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DnsRecord.__pulumiType;
    }

    public readonly content!: pulumi.Output<string>;
    public readonly enabled!: pulumi.Output<boolean>;
    /**
     * Fully qualified domain name
     */
    public /*out*/ readonly fqdn!: pulumi.Output<string>;
    public readonly name!: pulumi.Output<string>;
    public readonly priority!: pulumi.Output<number | undefined>;
    public readonly timeouts!: pulumi.Output<outputs.DnsRecordTimeouts | undefined>;
    public readonly ttl!: pulumi.Output<number>;
    public readonly type!: pulumi.Output<string>;
    public readonly zoneId!: pulumi.Output<string>;

    /**
     * Create a DnsRecord resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DnsRecordArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: DnsRecordArgs | DnsRecordState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as DnsRecordState | undefined;
            resourceInputs["content"] = state ? state.content : undefined;
            resourceInputs["enabled"] = state ? state.enabled : undefined;
            resourceInputs["fqdn"] = state ? state.fqdn : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["priority"] = state ? state.priority : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["ttl"] = state ? state.ttl : undefined;
            resourceInputs["type"] = state ? state.type : undefined;
            resourceInputs["zoneId"] = state ? state.zoneId : undefined;
        } else {
            const args = argsOrState as DnsRecordArgs | undefined;
            if ((!args || args.content === undefined) && !opts.urn) {
                throw new Error("Missing required property 'content'");
            }
            if ((!args || args.type === undefined) && !opts.urn) {
                throw new Error("Missing required property 'type'");
            }
            if ((!args || args.zoneId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'zoneId'");
            }
            resourceInputs["content"] = args ? args.content : undefined;
            resourceInputs["enabled"] = args ? args.enabled : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["priority"] = args ? args.priority : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["ttl"] = args ? args.ttl : undefined;
            resourceInputs["type"] = args ? args.type : undefined;
            resourceInputs["zoneId"] = args ? args.zoneId : undefined;
            resourceInputs["fqdn"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(DnsRecord.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering DnsRecord resources.
 */
export interface DnsRecordState {
    content?: pulumi.Input<string>;
    enabled?: pulumi.Input<boolean>;
    /**
     * Fully qualified domain name
     */
    fqdn?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    priority?: pulumi.Input<number>;
    timeouts?: pulumi.Input<inputs.DnsRecordTimeouts>;
    ttl?: pulumi.Input<number>;
    type?: pulumi.Input<string>;
    zoneId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a DnsRecord resource.
 */
export interface DnsRecordArgs {
    content: pulumi.Input<string>;
    enabled?: pulumi.Input<boolean>;
    name?: pulumi.Input<string>;
    priority?: pulumi.Input<number>;
    timeouts?: pulumi.Input<inputs.DnsRecordTimeouts>;
    ttl?: pulumi.Input<number>;
    type: pulumi.Input<string>;
    zoneId: pulumi.Input<string>;
}
