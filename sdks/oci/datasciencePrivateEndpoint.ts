// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class DatasciencePrivateEndpoint extends pulumi.CustomResource {
    /**
     * Get an existing DatasciencePrivateEndpoint resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DatasciencePrivateEndpointState, opts?: pulumi.CustomResourceOptions): DatasciencePrivateEndpoint {
        return new DatasciencePrivateEndpoint(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'oci:index/datasciencePrivateEndpoint:DatasciencePrivateEndpoint';

    /**
     * Returns true if the given object is an instance of DatasciencePrivateEndpoint.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DatasciencePrivateEndpoint {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DatasciencePrivateEndpoint.__pulumiType;
    }

    public readonly compartmentId!: pulumi.Output<string>;
    public /*out*/ readonly createdBy!: pulumi.Output<string>;
    public readonly dataScienceResourceType!: pulumi.Output<string>;
    public readonly definedTags!: pulumi.Output<{[key: string]: string}>;
    public readonly description!: pulumi.Output<string>;
    public readonly displayName!: pulumi.Output<string>;
    public /*out*/ readonly fqdn!: pulumi.Output<string>;
    public readonly freeformTags!: pulumi.Output<{[key: string]: string}>;
    public /*out*/ readonly lifecycleDetails!: pulumi.Output<string>;
    public readonly nsgIds!: pulumi.Output<string[]>;
    public /*out*/ readonly state!: pulumi.Output<string>;
    public readonly subDomain!: pulumi.Output<string>;
    public readonly subnetId!: pulumi.Output<string>;
    public /*out*/ readonly systemTags!: pulumi.Output<{[key: string]: string}>;
    public /*out*/ readonly timeCreated!: pulumi.Output<string>;
    public /*out*/ readonly timeUpdated!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.DatasciencePrivateEndpointTimeouts | undefined>;

    /**
     * Create a DatasciencePrivateEndpoint resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DatasciencePrivateEndpointArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: DatasciencePrivateEndpointArgs | DatasciencePrivateEndpointState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as DatasciencePrivateEndpointState | undefined;
            resourceInputs["compartmentId"] = state ? state.compartmentId : undefined;
            resourceInputs["createdBy"] = state ? state.createdBy : undefined;
            resourceInputs["dataScienceResourceType"] = state ? state.dataScienceResourceType : undefined;
            resourceInputs["definedTags"] = state ? state.definedTags : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["displayName"] = state ? state.displayName : undefined;
            resourceInputs["fqdn"] = state ? state.fqdn : undefined;
            resourceInputs["freeformTags"] = state ? state.freeformTags : undefined;
            resourceInputs["lifecycleDetails"] = state ? state.lifecycleDetails : undefined;
            resourceInputs["nsgIds"] = state ? state.nsgIds : undefined;
            resourceInputs["state"] = state ? state.state : undefined;
            resourceInputs["subDomain"] = state ? state.subDomain : undefined;
            resourceInputs["subnetId"] = state ? state.subnetId : undefined;
            resourceInputs["systemTags"] = state ? state.systemTags : undefined;
            resourceInputs["timeCreated"] = state ? state.timeCreated : undefined;
            resourceInputs["timeUpdated"] = state ? state.timeUpdated : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as DatasciencePrivateEndpointArgs | undefined;
            if ((!args || args.compartmentId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'compartmentId'");
            }
            if ((!args || args.dataScienceResourceType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'dataScienceResourceType'");
            }
            if ((!args || args.subnetId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'subnetId'");
            }
            resourceInputs["compartmentId"] = args ? args.compartmentId : undefined;
            resourceInputs["dataScienceResourceType"] = args ? args.dataScienceResourceType : undefined;
            resourceInputs["definedTags"] = args ? args.definedTags : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["displayName"] = args ? args.displayName : undefined;
            resourceInputs["freeformTags"] = args ? args.freeformTags : undefined;
            resourceInputs["nsgIds"] = args ? args.nsgIds : undefined;
            resourceInputs["subDomain"] = args ? args.subDomain : undefined;
            resourceInputs["subnetId"] = args ? args.subnetId : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["createdBy"] = undefined /*out*/;
            resourceInputs["fqdn"] = undefined /*out*/;
            resourceInputs["lifecycleDetails"] = undefined /*out*/;
            resourceInputs["state"] = undefined /*out*/;
            resourceInputs["systemTags"] = undefined /*out*/;
            resourceInputs["timeCreated"] = undefined /*out*/;
            resourceInputs["timeUpdated"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(DatasciencePrivateEndpoint.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering DatasciencePrivateEndpoint resources.
 */
export interface DatasciencePrivateEndpointState {
    compartmentId?: pulumi.Input<string>;
    createdBy?: pulumi.Input<string>;
    dataScienceResourceType?: pulumi.Input<string>;
    definedTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    description?: pulumi.Input<string>;
    displayName?: pulumi.Input<string>;
    fqdn?: pulumi.Input<string>;
    freeformTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    lifecycleDetails?: pulumi.Input<string>;
    nsgIds?: pulumi.Input<pulumi.Input<string>[]>;
    state?: pulumi.Input<string>;
    subDomain?: pulumi.Input<string>;
    subnetId?: pulumi.Input<string>;
    systemTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    timeCreated?: pulumi.Input<string>;
    timeUpdated?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.DatasciencePrivateEndpointTimeouts>;
}

/**
 * The set of arguments for constructing a DatasciencePrivateEndpoint resource.
 */
export interface DatasciencePrivateEndpointArgs {
    compartmentId: pulumi.Input<string>;
    dataScienceResourceType: pulumi.Input<string>;
    definedTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    description?: pulumi.Input<string>;
    displayName?: pulumi.Input<string>;
    freeformTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    nsgIds?: pulumi.Input<pulumi.Input<string>[]>;
    subDomain?: pulumi.Input<string>;
    subnetId: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.DatasciencePrivateEndpointTimeouts>;
}
