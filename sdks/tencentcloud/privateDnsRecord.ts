// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class PrivateDnsRecord extends pulumi.CustomResource {
    /**
     * Get an existing PrivateDnsRecord resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: PrivateDnsRecordState, opts?: pulumi.CustomResourceOptions): PrivateDnsRecord {
        return new PrivateDnsRecord(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'tencentcloud:index/privateDnsRecord:PrivateDnsRecord';

    /**
     * Returns true if the given object is an instance of PrivateDnsRecord.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is PrivateDnsRecord {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === PrivateDnsRecord.__pulumiType;
    }

    /**
     * MX priority, which is required when the record type is MX. Valid values: 5, 10, 15, 20, 30, 40, 50.
     */
    public readonly mx!: pulumi.Output<number | undefined>;
    /**
     * Record type. Valid values: "A", "AAAA", "CNAME", "MX", "TXT", "PTR".
     */
    public readonly recordType!: pulumi.Output<string>;
    /**
     * Record value, such as IP: 192.168.10.2, CNAME: cname.qcloud.com, and MX: mail.qcloud.com.
     */
    public readonly recordValue!: pulumi.Output<string>;
    /**
     * Subdomain, such as "www", "m", and "@".
     */
    public readonly subDomain!: pulumi.Output<string>;
    /**
     * Record cache time. The smaller the value, the faster the record will take effect. Value range: 1~86400s.
     */
    public readonly ttl!: pulumi.Output<number>;
    /**
     * Record weight. Value range: 1~100.
     */
    public readonly weight!: pulumi.Output<number | undefined>;
    /**
     * Private domain ID.
     */
    public readonly zoneId!: pulumi.Output<string>;

    /**
     * Create a PrivateDnsRecord resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PrivateDnsRecordArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: PrivateDnsRecordArgs | PrivateDnsRecordState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as PrivateDnsRecordState | undefined;
            resourceInputs["mx"] = state ? state.mx : undefined;
            resourceInputs["recordType"] = state ? state.recordType : undefined;
            resourceInputs["recordValue"] = state ? state.recordValue : undefined;
            resourceInputs["subDomain"] = state ? state.subDomain : undefined;
            resourceInputs["ttl"] = state ? state.ttl : undefined;
            resourceInputs["weight"] = state ? state.weight : undefined;
            resourceInputs["zoneId"] = state ? state.zoneId : undefined;
        } else {
            const args = argsOrState as PrivateDnsRecordArgs | undefined;
            if ((!args || args.recordType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'recordType'");
            }
            if ((!args || args.recordValue === undefined) && !opts.urn) {
                throw new Error("Missing required property 'recordValue'");
            }
            if ((!args || args.subDomain === undefined) && !opts.urn) {
                throw new Error("Missing required property 'subDomain'");
            }
            if ((!args || args.zoneId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'zoneId'");
            }
            resourceInputs["mx"] = args ? args.mx : undefined;
            resourceInputs["recordType"] = args ? args.recordType : undefined;
            resourceInputs["recordValue"] = args ? args.recordValue : undefined;
            resourceInputs["subDomain"] = args ? args.subDomain : undefined;
            resourceInputs["ttl"] = args ? args.ttl : undefined;
            resourceInputs["weight"] = args ? args.weight : undefined;
            resourceInputs["zoneId"] = args ? args.zoneId : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(PrivateDnsRecord.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering PrivateDnsRecord resources.
 */
export interface PrivateDnsRecordState {
    /**
     * MX priority, which is required when the record type is MX. Valid values: 5, 10, 15, 20, 30, 40, 50.
     */
    mx?: pulumi.Input<number>;
    /**
     * Record type. Valid values: "A", "AAAA", "CNAME", "MX", "TXT", "PTR".
     */
    recordType?: pulumi.Input<string>;
    /**
     * Record value, such as IP: 192.168.10.2, CNAME: cname.qcloud.com, and MX: mail.qcloud.com.
     */
    recordValue?: pulumi.Input<string>;
    /**
     * Subdomain, such as "www", "m", and "@".
     */
    subDomain?: pulumi.Input<string>;
    /**
     * Record cache time. The smaller the value, the faster the record will take effect. Value range: 1~86400s.
     */
    ttl?: pulumi.Input<number>;
    /**
     * Record weight. Value range: 1~100.
     */
    weight?: pulumi.Input<number>;
    /**
     * Private domain ID.
     */
    zoneId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a PrivateDnsRecord resource.
 */
export interface PrivateDnsRecordArgs {
    /**
     * MX priority, which is required when the record type is MX. Valid values: 5, 10, 15, 20, 30, 40, 50.
     */
    mx?: pulumi.Input<number>;
    /**
     * Record type. Valid values: "A", "AAAA", "CNAME", "MX", "TXT", "PTR".
     */
    recordType: pulumi.Input<string>;
    /**
     * Record value, such as IP: 192.168.10.2, CNAME: cname.qcloud.com, and MX: mail.qcloud.com.
     */
    recordValue: pulumi.Input<string>;
    /**
     * Subdomain, such as "www", "m", and "@".
     */
    subDomain: pulumi.Input<string>;
    /**
     * Record cache time. The smaller the value, the faster the record will take effect. Value range: 1~86400s.
     */
    ttl?: pulumi.Input<number>;
    /**
     * Record weight. Value range: 1~100.
     */
    weight?: pulumi.Input<number>;
    /**
     * Private domain ID.
     */
    zoneId: pulumi.Input<string>;
}
