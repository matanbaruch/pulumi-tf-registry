// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class PtrRecord extends pulumi.CustomResource {
    /**
     * Get an existing PtrRecord resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: PtrRecordState, opts?: pulumi.CustomResourceOptions): PtrRecord {
        return new PtrRecord(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'infoblox:index/ptrRecord:PtrRecord';

    /**
     * Returns true if the given object is an instance of PtrRecord.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is PtrRecord {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === PtrRecord.__pulumiType;
    }

    /**
     * Comment for the record; maximum 256 characters.
     */
    public readonly comment!: pulumi.Output<string>;
    /**
     * Determines if the record is disabled or not. False means that the record is enabled.
     */
    public readonly disable!: pulumi.Output<boolean>;
    /**
     * The name for a DNS PTR record in punycode format.
     */
    public /*out*/ readonly dnsName!: pulumi.Output<string>;
    /**
     * The domain name of the DNS PTR record in punycode format.
     */
    public /*out*/ readonly dnsPointerDomainName!: pulumi.Output<string>;
    /**
     * Extensible attributes of ptr record (Values are JSON encoded).
     */
    public readonly extensibleAttributes!: pulumi.Output<{[key: string]: string}>;
    /**
     * The IPv4 Address of the record.
     */
    public readonly ipV4Address!: pulumi.Output<string | undefined>;
    /**
     * The IPv6 Address of the record.
     */
    public readonly ipV6Address!: pulumi.Output<string | undefined>;
    /**
     * The name of the DNS PTR record in FQDN format.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The domain name of the DNS PTR record in FQDN format.
     */
    public readonly pointerDomainName!: pulumi.Output<string>;
    /**
     * Reference id of ptr record object.
     */
    public /*out*/ readonly ref!: pulumi.Output<string>;
    /**
     * Name of the DNS View in which the record resides.
     */
    public readonly view!: pulumi.Output<string>;
    /**
     * The name of the zone in which the record resides.
     */
    public /*out*/ readonly zone!: pulumi.Output<string>;

    /**
     * Create a PtrRecord resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: PtrRecordArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: PtrRecordArgs | PtrRecordState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as PtrRecordState | undefined;
            resourceInputs["comment"] = state ? state.comment : undefined;
            resourceInputs["disable"] = state ? state.disable : undefined;
            resourceInputs["dnsName"] = state ? state.dnsName : undefined;
            resourceInputs["dnsPointerDomainName"] = state ? state.dnsPointerDomainName : undefined;
            resourceInputs["extensibleAttributes"] = state ? state.extensibleAttributes : undefined;
            resourceInputs["ipV4Address"] = state ? state.ipV4Address : undefined;
            resourceInputs["ipV6Address"] = state ? state.ipV6Address : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["pointerDomainName"] = state ? state.pointerDomainName : undefined;
            resourceInputs["ref"] = state ? state.ref : undefined;
            resourceInputs["view"] = state ? state.view : undefined;
            resourceInputs["zone"] = state ? state.zone : undefined;
        } else {
            const args = argsOrState as PtrRecordArgs | undefined;
            resourceInputs["comment"] = args ? args.comment : undefined;
            resourceInputs["disable"] = args ? args.disable : undefined;
            resourceInputs["extensibleAttributes"] = args ? args.extensibleAttributes : undefined;
            resourceInputs["ipV4Address"] = args ? args.ipV4Address : undefined;
            resourceInputs["ipV6Address"] = args ? args.ipV6Address : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["pointerDomainName"] = args ? args.pointerDomainName : undefined;
            resourceInputs["view"] = args ? args.view : undefined;
            resourceInputs["dnsName"] = undefined /*out*/;
            resourceInputs["dnsPointerDomainName"] = undefined /*out*/;
            resourceInputs["ref"] = undefined /*out*/;
            resourceInputs["zone"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(PtrRecord.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering PtrRecord resources.
 */
export interface PtrRecordState {
    /**
     * Comment for the record; maximum 256 characters.
     */
    comment?: pulumi.Input<string>;
    /**
     * Determines if the record is disabled or not. False means that the record is enabled.
     */
    disable?: pulumi.Input<boolean>;
    /**
     * The name for a DNS PTR record in punycode format.
     */
    dnsName?: pulumi.Input<string>;
    /**
     * The domain name of the DNS PTR record in punycode format.
     */
    dnsPointerDomainName?: pulumi.Input<string>;
    /**
     * Extensible attributes of ptr record (Values are JSON encoded).
     */
    extensibleAttributes?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The IPv4 Address of the record.
     */
    ipV4Address?: pulumi.Input<string>;
    /**
     * The IPv6 Address of the record.
     */
    ipV6Address?: pulumi.Input<string>;
    /**
     * The name of the DNS PTR record in FQDN format.
     */
    name?: pulumi.Input<string>;
    /**
     * The domain name of the DNS PTR record in FQDN format.
     */
    pointerDomainName?: pulumi.Input<string>;
    /**
     * Reference id of ptr record object.
     */
    ref?: pulumi.Input<string>;
    /**
     * Name of the DNS View in which the record resides.
     */
    view?: pulumi.Input<string>;
    /**
     * The name of the zone in which the record resides.
     */
    zone?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a PtrRecord resource.
 */
export interface PtrRecordArgs {
    /**
     * Comment for the record; maximum 256 characters.
     */
    comment?: pulumi.Input<string>;
    /**
     * Determines if the record is disabled or not. False means that the record is enabled.
     */
    disable?: pulumi.Input<boolean>;
    /**
     * Extensible attributes of ptr record (Values are JSON encoded).
     */
    extensibleAttributes?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The IPv4 Address of the record.
     */
    ipV4Address?: pulumi.Input<string>;
    /**
     * The IPv6 Address of the record.
     */
    ipV6Address?: pulumi.Input<string>;
    /**
     * The name of the DNS PTR record in FQDN format.
     */
    name?: pulumi.Input<string>;
    /**
     * The domain name of the DNS PTR record in FQDN format.
     */
    pointerDomainName?: pulumi.Input<string>;
    /**
     * Name of the DNS View in which the record resides.
     */
    view?: pulumi.Input<string>;
}
