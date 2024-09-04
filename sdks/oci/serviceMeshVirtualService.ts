// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class ServiceMeshVirtualService extends pulumi.CustomResource {
    /**
     * Get an existing ServiceMeshVirtualService resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ServiceMeshVirtualServiceState, opts?: pulumi.CustomResourceOptions): ServiceMeshVirtualService {
        return new ServiceMeshVirtualService(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'oci:index/serviceMeshVirtualService:ServiceMeshVirtualService';

    /**
     * Returns true if the given object is an instance of ServiceMeshVirtualService.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ServiceMeshVirtualService {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ServiceMeshVirtualService.__pulumiType;
    }

    public readonly compartmentId!: pulumi.Output<string>;
    public readonly defaultRoutingPolicy!: pulumi.Output<outputs.ServiceMeshVirtualServiceDefaultRoutingPolicy | undefined>;
    public readonly definedTags!: pulumi.Output<{[key: string]: string}>;
    public readonly description!: pulumi.Output<string>;
    public readonly freeformTags!: pulumi.Output<{[key: string]: string}>;
    public readonly hosts!: pulumi.Output<string[]>;
    public /*out*/ readonly lifecycleDetails!: pulumi.Output<string>;
    public readonly meshId!: pulumi.Output<string>;
    public readonly mtls!: pulumi.Output<outputs.ServiceMeshVirtualServiceMtls | undefined>;
    public readonly name!: pulumi.Output<string>;
    public /*out*/ readonly state!: pulumi.Output<string>;
    public /*out*/ readonly systemTags!: pulumi.Output<{[key: string]: string}>;
    public /*out*/ readonly timeCreated!: pulumi.Output<string>;
    public /*out*/ readonly timeUpdated!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.ServiceMeshVirtualServiceTimeouts | undefined>;

    /**
     * Create a ServiceMeshVirtualService resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ServiceMeshVirtualServiceArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ServiceMeshVirtualServiceArgs | ServiceMeshVirtualServiceState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ServiceMeshVirtualServiceState | undefined;
            resourceInputs["compartmentId"] = state ? state.compartmentId : undefined;
            resourceInputs["defaultRoutingPolicy"] = state ? state.defaultRoutingPolicy : undefined;
            resourceInputs["definedTags"] = state ? state.definedTags : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["freeformTags"] = state ? state.freeformTags : undefined;
            resourceInputs["hosts"] = state ? state.hosts : undefined;
            resourceInputs["lifecycleDetails"] = state ? state.lifecycleDetails : undefined;
            resourceInputs["meshId"] = state ? state.meshId : undefined;
            resourceInputs["mtls"] = state ? state.mtls : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["state"] = state ? state.state : undefined;
            resourceInputs["systemTags"] = state ? state.systemTags : undefined;
            resourceInputs["timeCreated"] = state ? state.timeCreated : undefined;
            resourceInputs["timeUpdated"] = state ? state.timeUpdated : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as ServiceMeshVirtualServiceArgs | undefined;
            if ((!args || args.compartmentId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'compartmentId'");
            }
            if ((!args || args.meshId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'meshId'");
            }
            resourceInputs["compartmentId"] = args ? args.compartmentId : undefined;
            resourceInputs["defaultRoutingPolicy"] = args ? args.defaultRoutingPolicy : undefined;
            resourceInputs["definedTags"] = args ? args.definedTags : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["freeformTags"] = args ? args.freeformTags : undefined;
            resourceInputs["hosts"] = args ? args.hosts : undefined;
            resourceInputs["meshId"] = args ? args.meshId : undefined;
            resourceInputs["mtls"] = args ? args.mtls : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["lifecycleDetails"] = undefined /*out*/;
            resourceInputs["state"] = undefined /*out*/;
            resourceInputs["systemTags"] = undefined /*out*/;
            resourceInputs["timeCreated"] = undefined /*out*/;
            resourceInputs["timeUpdated"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ServiceMeshVirtualService.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ServiceMeshVirtualService resources.
 */
export interface ServiceMeshVirtualServiceState {
    compartmentId?: pulumi.Input<string>;
    defaultRoutingPolicy?: pulumi.Input<inputs.ServiceMeshVirtualServiceDefaultRoutingPolicy>;
    definedTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    description?: pulumi.Input<string>;
    freeformTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    hosts?: pulumi.Input<pulumi.Input<string>[]>;
    lifecycleDetails?: pulumi.Input<string>;
    meshId?: pulumi.Input<string>;
    mtls?: pulumi.Input<inputs.ServiceMeshVirtualServiceMtls>;
    name?: pulumi.Input<string>;
    state?: pulumi.Input<string>;
    systemTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    timeCreated?: pulumi.Input<string>;
    timeUpdated?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.ServiceMeshVirtualServiceTimeouts>;
}

/**
 * The set of arguments for constructing a ServiceMeshVirtualService resource.
 */
export interface ServiceMeshVirtualServiceArgs {
    compartmentId: pulumi.Input<string>;
    defaultRoutingPolicy?: pulumi.Input<inputs.ServiceMeshVirtualServiceDefaultRoutingPolicy>;
    definedTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    description?: pulumi.Input<string>;
    freeformTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    hosts?: pulumi.Input<pulumi.Input<string>[]>;
    meshId: pulumi.Input<string>;
    mtls?: pulumi.Input<inputs.ServiceMeshVirtualServiceMtls>;
    name?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.ServiceMeshVirtualServiceTimeouts>;
}
