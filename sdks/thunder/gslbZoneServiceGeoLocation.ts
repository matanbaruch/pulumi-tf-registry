// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class GslbZoneServiceGeoLocation extends pulumi.CustomResource {
    /**
     * Get an existing GslbZoneServiceGeoLocation resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: GslbZoneServiceGeoLocationState, opts?: pulumi.CustomResourceOptions): GslbZoneServiceGeoLocation {
        return new GslbZoneServiceGeoLocation(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'thunder:index/gslbZoneServiceGeoLocation:GslbZoneServiceGeoLocation';

    /**
     * Returns true if the given object is an instance of GslbZoneServiceGeoLocation.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is GslbZoneServiceGeoLocation {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === GslbZoneServiceGeoLocation.__pulumiType;
    }

    /**
     * Action for this geo-location
     */
    public readonly action!: pulumi.Output<number | undefined>;
    /**
     * 'allow': Allow query from this geo-location; 'drop': Drop query from this geo-location; 'forward': Forward packet for
     * this geo-location; 'ignore': Send empty response to this geo-location; 'reject': Send refuse response to this
     * geo-location;
     */
    public readonly actionType!: pulumi.Output<string | undefined>;
    public readonly aliases!: pulumi.Output<outputs.GslbZoneServiceGeoLocationAlias[] | undefined>;
    /**
     * 'both': Forward both query and response; 'query': Forward query from this geo-location; 'response': Forward response to
     * this geo-location;
     */
    public readonly forwardType!: pulumi.Output<string | undefined>;
    /**
     * Specify the geo-location
     */
    public readonly geoName!: pulumi.Output<string>;
    /**
     * Name
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Policy for this geo-location (Specify the policy name)
     */
    public readonly policy!: pulumi.Output<string | undefined>;
    /**
     * ServiceName
     */
    public readonly serviceName!: pulumi.Output<string>;
    /**
     * ServicePort
     */
    public readonly servicePort!: pulumi.Output<string>;
    /**
     * Customized tag
     */
    public readonly userTag!: pulumi.Output<string | undefined>;
    /**
     * uuid of the object
     */
    public readonly uuid!: pulumi.Output<string>;

    /**
     * Create a GslbZoneServiceGeoLocation resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: GslbZoneServiceGeoLocationArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: GslbZoneServiceGeoLocationArgs | GslbZoneServiceGeoLocationState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as GslbZoneServiceGeoLocationState | undefined;
            resourceInputs["action"] = state ? state.action : undefined;
            resourceInputs["actionType"] = state ? state.actionType : undefined;
            resourceInputs["aliases"] = state ? state.aliases : undefined;
            resourceInputs["forwardType"] = state ? state.forwardType : undefined;
            resourceInputs["geoName"] = state ? state.geoName : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["policy"] = state ? state.policy : undefined;
            resourceInputs["serviceName"] = state ? state.serviceName : undefined;
            resourceInputs["servicePort"] = state ? state.servicePort : undefined;
            resourceInputs["userTag"] = state ? state.userTag : undefined;
            resourceInputs["uuid"] = state ? state.uuid : undefined;
        } else {
            const args = argsOrState as GslbZoneServiceGeoLocationArgs | undefined;
            if ((!args || args.geoName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'geoName'");
            }
            if ((!args || args.serviceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'serviceName'");
            }
            if ((!args || args.servicePort === undefined) && !opts.urn) {
                throw new Error("Missing required property 'servicePort'");
            }
            resourceInputs["action"] = args ? args.action : undefined;
            resourceInputs["actionType"] = args ? args.actionType : undefined;
            resourceInputs["aliases"] = args ? args.aliases : undefined;
            resourceInputs["forwardType"] = args ? args.forwardType : undefined;
            resourceInputs["geoName"] = args ? args.geoName : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["policy"] = args ? args.policy : undefined;
            resourceInputs["serviceName"] = args ? args.serviceName : undefined;
            resourceInputs["servicePort"] = args ? args.servicePort : undefined;
            resourceInputs["userTag"] = args ? args.userTag : undefined;
            resourceInputs["uuid"] = args ? args.uuid : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(GslbZoneServiceGeoLocation.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering GslbZoneServiceGeoLocation resources.
 */
export interface GslbZoneServiceGeoLocationState {
    /**
     * Action for this geo-location
     */
    action?: pulumi.Input<number>;
    /**
     * 'allow': Allow query from this geo-location; 'drop': Drop query from this geo-location; 'forward': Forward packet for
     * this geo-location; 'ignore': Send empty response to this geo-location; 'reject': Send refuse response to this
     * geo-location;
     */
    actionType?: pulumi.Input<string>;
    aliases?: pulumi.Input<pulumi.Input<inputs.GslbZoneServiceGeoLocationAlias>[]>;
    /**
     * 'both': Forward both query and response; 'query': Forward query from this geo-location; 'response': Forward response to
     * this geo-location;
     */
    forwardType?: pulumi.Input<string>;
    /**
     * Specify the geo-location
     */
    geoName?: pulumi.Input<string>;
    /**
     * Name
     */
    name?: pulumi.Input<string>;
    /**
     * Policy for this geo-location (Specify the policy name)
     */
    policy?: pulumi.Input<string>;
    /**
     * ServiceName
     */
    serviceName?: pulumi.Input<string>;
    /**
     * ServicePort
     */
    servicePort?: pulumi.Input<string>;
    /**
     * Customized tag
     */
    userTag?: pulumi.Input<string>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a GslbZoneServiceGeoLocation resource.
 */
export interface GslbZoneServiceGeoLocationArgs {
    /**
     * Action for this geo-location
     */
    action?: pulumi.Input<number>;
    /**
     * 'allow': Allow query from this geo-location; 'drop': Drop query from this geo-location; 'forward': Forward packet for
     * this geo-location; 'ignore': Send empty response to this geo-location; 'reject': Send refuse response to this
     * geo-location;
     */
    actionType?: pulumi.Input<string>;
    aliases?: pulumi.Input<pulumi.Input<inputs.GslbZoneServiceGeoLocationAlias>[]>;
    /**
     * 'both': Forward both query and response; 'query': Forward query from this geo-location; 'response': Forward response to
     * this geo-location;
     */
    forwardType?: pulumi.Input<string>;
    /**
     * Specify the geo-location
     */
    geoName: pulumi.Input<string>;
    /**
     * Name
     */
    name?: pulumi.Input<string>;
    /**
     * Policy for this geo-location (Specify the policy name)
     */
    policy?: pulumi.Input<string>;
    /**
     * ServiceName
     */
    serviceName: pulumi.Input<string>;
    /**
     * ServicePort
     */
    servicePort: pulumi.Input<string>;
    /**
     * Customized tag
     */
    userTag?: pulumi.Input<string>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
}
