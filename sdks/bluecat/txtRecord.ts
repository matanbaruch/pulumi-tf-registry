// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class TxtRecord extends pulumi.CustomResource {
    /**
     * Get an existing TxtRecord resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: TxtRecordState, opts?: pulumi.CustomResourceOptions): TxtRecord {
        return new TxtRecord(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'bluecat:index/txtRecord:TxtRecord';

    /**
     * Returns true if the given object is an instance of TxtRecord.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is TxtRecord {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === TxtRecord.__pulumiType;
    }

    /**
     * The name of the TXT record. Must be FQDN if the Zone is not provided
     */
    public readonly absoluteName!: pulumi.Output<string>;
    /**
     * The Configuration. Creating the TXT record in the default Configuration if doesn't specify
     */
    public readonly configuration!: pulumi.Output<string | undefined>;
    /**
     * TXT record's properties. Example: attribute=value|
     */
    public readonly properties!: pulumi.Output<string | undefined>;
    /**
     * Set the text of TXT record
     */
    public readonly text!: pulumi.Output<string>;
    /**
     * The TTL value
     */
    public readonly ttl!: pulumi.Output<number | undefined>;
    /**
     * The view which contains the details of the zone. If not provided, record will be created under default view
     */
    public readonly view!: pulumi.Output<string | undefined>;
    /**
     * The Zone in which you want to update a TXT record. If not provided, the absolute name must be FQDN ones
     */
    public readonly zone!: pulumi.Output<string | undefined>;

    /**
     * Create a TxtRecord resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: TxtRecordArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: TxtRecordArgs | TxtRecordState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as TxtRecordState | undefined;
            resourceInputs["absoluteName"] = state ? state.absoluteName : undefined;
            resourceInputs["configuration"] = state ? state.configuration : undefined;
            resourceInputs["properties"] = state ? state.properties : undefined;
            resourceInputs["text"] = state ? state.text : undefined;
            resourceInputs["ttl"] = state ? state.ttl : undefined;
            resourceInputs["view"] = state ? state.view : undefined;
            resourceInputs["zone"] = state ? state.zone : undefined;
        } else {
            const args = argsOrState as TxtRecordArgs | undefined;
            if ((!args || args.absoluteName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'absoluteName'");
            }
            if ((!args || args.text === undefined) && !opts.urn) {
                throw new Error("Missing required property 'text'");
            }
            resourceInputs["absoluteName"] = args ? args.absoluteName : undefined;
            resourceInputs["configuration"] = args ? args.configuration : undefined;
            resourceInputs["properties"] = args ? args.properties : undefined;
            resourceInputs["text"] = args ? args.text : undefined;
            resourceInputs["ttl"] = args ? args.ttl : undefined;
            resourceInputs["view"] = args ? args.view : undefined;
            resourceInputs["zone"] = args ? args.zone : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(TxtRecord.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering TxtRecord resources.
 */
export interface TxtRecordState {
    /**
     * The name of the TXT record. Must be FQDN if the Zone is not provided
     */
    absoluteName?: pulumi.Input<string>;
    /**
     * The Configuration. Creating the TXT record in the default Configuration if doesn't specify
     */
    configuration?: pulumi.Input<string>;
    /**
     * TXT record's properties. Example: attribute=value|
     */
    properties?: pulumi.Input<string>;
    /**
     * Set the text of TXT record
     */
    text?: pulumi.Input<string>;
    /**
     * The TTL value
     */
    ttl?: pulumi.Input<number>;
    /**
     * The view which contains the details of the zone. If not provided, record will be created under default view
     */
    view?: pulumi.Input<string>;
    /**
     * The Zone in which you want to update a TXT record. If not provided, the absolute name must be FQDN ones
     */
    zone?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a TxtRecord resource.
 */
export interface TxtRecordArgs {
    /**
     * The name of the TXT record. Must be FQDN if the Zone is not provided
     */
    absoluteName: pulumi.Input<string>;
    /**
     * The Configuration. Creating the TXT record in the default Configuration if doesn't specify
     */
    configuration?: pulumi.Input<string>;
    /**
     * TXT record's properties. Example: attribute=value|
     */
    properties?: pulumi.Input<string>;
    /**
     * Set the text of TXT record
     */
    text: pulumi.Input<string>;
    /**
     * The TTL value
     */
    ttl?: pulumi.Input<number>;
    /**
     * The view which contains the details of the zone. If not provided, record will be created under default view
     */
    view?: pulumi.Input<string>;
    /**
     * The Zone in which you want to update a TXT record. If not provided, the absolute name must be FQDN ones
     */
    zone?: pulumi.Input<string>;
}
