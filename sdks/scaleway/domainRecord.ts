// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class DomainRecord extends pulumi.CustomResource {
    /**
     * Get an existing DomainRecord resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DomainRecordState, opts?: pulumi.CustomResourceOptions): DomainRecord {
        return new DomainRecord(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'scaleway:index/domainRecord:DomainRecord';

    /**
     * Returns true if the given object is an instance of DomainRecord.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DomainRecord {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DomainRecord.__pulumiType;
    }

    /**
     * The data of the record
     */
    public readonly data!: pulumi.Output<string>;
    /**
     * The zone you want to add the record in
     */
    public readonly dnsZone!: pulumi.Output<string>;
    /**
     * The FQDN of the record
     */
    public /*out*/ readonly fqdn!: pulumi.Output<string>;
    /**
     * Return record based on client localisation
     */
    public readonly geoIp!: pulumi.Output<outputs.DomainRecordGeoIp | undefined>;
    /**
     * Return record based on client localisation
     */
    public readonly httpService!: pulumi.Output<outputs.DomainRecordHttpService | undefined>;
    /**
     * When destroy a resource record, if a zone have only NS, delete the zone
     */
    public readonly keepEmptyZone!: pulumi.Output<boolean | undefined>;
    /**
     * The name of the record
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The priority of the record
     */
    public readonly priority!: pulumi.Output<number>;
    /**
     * The project_id you want to attach the resource to
     */
    public readonly projectId!: pulumi.Output<string>;
    /**
     * Does the DNS zone is the root zone or not
     */
    public /*out*/ readonly rootZone!: pulumi.Output<boolean>;
    public readonly timeouts!: pulumi.Output<outputs.DomainRecordTimeouts | undefined>;
    /**
     * The ttl of the record
     */
    public readonly ttl!: pulumi.Output<number | undefined>;
    /**
     * The type of the record
     */
    public readonly type!: pulumi.Output<string>;
    /**
     * Return record based on client subnet
     */
    public readonly views!: pulumi.Output<outputs.DomainRecordView[] | undefined>;
    /**
     * Return record based on weight
     */
    public readonly weighteds!: pulumi.Output<outputs.DomainRecordWeighted[] | undefined>;

    /**
     * Create a DomainRecord resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DomainRecordArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: DomainRecordArgs | DomainRecordState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as DomainRecordState | undefined;
            resourceInputs["data"] = state ? state.data : undefined;
            resourceInputs["dnsZone"] = state ? state.dnsZone : undefined;
            resourceInputs["fqdn"] = state ? state.fqdn : undefined;
            resourceInputs["geoIp"] = state ? state.geoIp : undefined;
            resourceInputs["httpService"] = state ? state.httpService : undefined;
            resourceInputs["keepEmptyZone"] = state ? state.keepEmptyZone : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["priority"] = state ? state.priority : undefined;
            resourceInputs["projectId"] = state ? state.projectId : undefined;
            resourceInputs["rootZone"] = state ? state.rootZone : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["ttl"] = state ? state.ttl : undefined;
            resourceInputs["type"] = state ? state.type : undefined;
            resourceInputs["views"] = state ? state.views : undefined;
            resourceInputs["weighteds"] = state ? state.weighteds : undefined;
        } else {
            const args = argsOrState as DomainRecordArgs | undefined;
            if ((!args || args.data === undefined) && !opts.urn) {
                throw new Error("Missing required property 'data'");
            }
            if ((!args || args.dnsZone === undefined) && !opts.urn) {
                throw new Error("Missing required property 'dnsZone'");
            }
            if ((!args || args.type === undefined) && !opts.urn) {
                throw new Error("Missing required property 'type'");
            }
            resourceInputs["data"] = args ? args.data : undefined;
            resourceInputs["dnsZone"] = args ? args.dnsZone : undefined;
            resourceInputs["geoIp"] = args ? args.geoIp : undefined;
            resourceInputs["httpService"] = args ? args.httpService : undefined;
            resourceInputs["keepEmptyZone"] = args ? args.keepEmptyZone : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["priority"] = args ? args.priority : undefined;
            resourceInputs["projectId"] = args ? args.projectId : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["ttl"] = args ? args.ttl : undefined;
            resourceInputs["type"] = args ? args.type : undefined;
            resourceInputs["views"] = args ? args.views : undefined;
            resourceInputs["weighteds"] = args ? args.weighteds : undefined;
            resourceInputs["fqdn"] = undefined /*out*/;
            resourceInputs["rootZone"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(DomainRecord.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering DomainRecord resources.
 */
export interface DomainRecordState {
    /**
     * The data of the record
     */
    data?: pulumi.Input<string>;
    /**
     * The zone you want to add the record in
     */
    dnsZone?: pulumi.Input<string>;
    /**
     * The FQDN of the record
     */
    fqdn?: pulumi.Input<string>;
    /**
     * Return record based on client localisation
     */
    geoIp?: pulumi.Input<inputs.DomainRecordGeoIp>;
    /**
     * Return record based on client localisation
     */
    httpService?: pulumi.Input<inputs.DomainRecordHttpService>;
    /**
     * When destroy a resource record, if a zone have only NS, delete the zone
     */
    keepEmptyZone?: pulumi.Input<boolean>;
    /**
     * The name of the record
     */
    name?: pulumi.Input<string>;
    /**
     * The priority of the record
     */
    priority?: pulumi.Input<number>;
    /**
     * The project_id you want to attach the resource to
     */
    projectId?: pulumi.Input<string>;
    /**
     * Does the DNS zone is the root zone or not
     */
    rootZone?: pulumi.Input<boolean>;
    timeouts?: pulumi.Input<inputs.DomainRecordTimeouts>;
    /**
     * The ttl of the record
     */
    ttl?: pulumi.Input<number>;
    /**
     * The type of the record
     */
    type?: pulumi.Input<string>;
    /**
     * Return record based on client subnet
     */
    views?: pulumi.Input<pulumi.Input<inputs.DomainRecordView>[]>;
    /**
     * Return record based on weight
     */
    weighteds?: pulumi.Input<pulumi.Input<inputs.DomainRecordWeighted>[]>;
}

/**
 * The set of arguments for constructing a DomainRecord resource.
 */
export interface DomainRecordArgs {
    /**
     * The data of the record
     */
    data: pulumi.Input<string>;
    /**
     * The zone you want to add the record in
     */
    dnsZone: pulumi.Input<string>;
    /**
     * Return record based on client localisation
     */
    geoIp?: pulumi.Input<inputs.DomainRecordGeoIp>;
    /**
     * Return record based on client localisation
     */
    httpService?: pulumi.Input<inputs.DomainRecordHttpService>;
    /**
     * When destroy a resource record, if a zone have only NS, delete the zone
     */
    keepEmptyZone?: pulumi.Input<boolean>;
    /**
     * The name of the record
     */
    name?: pulumi.Input<string>;
    /**
     * The priority of the record
     */
    priority?: pulumi.Input<number>;
    /**
     * The project_id you want to attach the resource to
     */
    projectId?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.DomainRecordTimeouts>;
    /**
     * The ttl of the record
     */
    ttl?: pulumi.Input<number>;
    /**
     * The type of the record
     */
    type: pulumi.Input<string>;
    /**
     * Return record based on client subnet
     */
    views?: pulumi.Input<pulumi.Input<inputs.DomainRecordView>[]>;
    /**
     * Return record based on weight
     */
    weighteds?: pulumi.Input<pulumi.Input<inputs.DomainRecordWeighted>[]>;
}
