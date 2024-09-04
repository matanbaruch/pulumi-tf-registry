// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class SpringCloudConnection extends pulumi.CustomResource {
    /**
     * Get an existing SpringCloudConnection resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SpringCloudConnectionState, opts?: pulumi.CustomResourceOptions): SpringCloudConnection {
        return new SpringCloudConnection(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azurerm:index/springCloudConnection:SpringCloudConnection';

    /**
     * Returns true if the given object is an instance of SpringCloudConnection.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SpringCloudConnection {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SpringCloudConnection.__pulumiType;
    }

    public readonly authentication!: pulumi.Output<outputs.SpringCloudConnectionAuthentication>;
    public readonly clientType!: pulumi.Output<string | undefined>;
    public readonly name!: pulumi.Output<string>;
    public readonly secretStore!: pulumi.Output<outputs.SpringCloudConnectionSecretStore | undefined>;
    public readonly springCloudId!: pulumi.Output<string>;
    public readonly targetResourceId!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.SpringCloudConnectionTimeouts | undefined>;
    public readonly vnetSolution!: pulumi.Output<string | undefined>;

    /**
     * Create a SpringCloudConnection resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SpringCloudConnectionArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SpringCloudConnectionArgs | SpringCloudConnectionState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SpringCloudConnectionState | undefined;
            resourceInputs["authentication"] = state ? state.authentication : undefined;
            resourceInputs["clientType"] = state ? state.clientType : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["secretStore"] = state ? state.secretStore : undefined;
            resourceInputs["springCloudId"] = state ? state.springCloudId : undefined;
            resourceInputs["targetResourceId"] = state ? state.targetResourceId : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["vnetSolution"] = state ? state.vnetSolution : undefined;
        } else {
            const args = argsOrState as SpringCloudConnectionArgs | undefined;
            if ((!args || args.authentication === undefined) && !opts.urn) {
                throw new Error("Missing required property 'authentication'");
            }
            if ((!args || args.springCloudId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'springCloudId'");
            }
            if ((!args || args.targetResourceId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'targetResourceId'");
            }
            resourceInputs["authentication"] = args ? args.authentication : undefined;
            resourceInputs["clientType"] = args ? args.clientType : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["secretStore"] = args ? args.secretStore : undefined;
            resourceInputs["springCloudId"] = args ? args.springCloudId : undefined;
            resourceInputs["targetResourceId"] = args ? args.targetResourceId : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["vnetSolution"] = args ? args.vnetSolution : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(SpringCloudConnection.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering SpringCloudConnection resources.
 */
export interface SpringCloudConnectionState {
    authentication?: pulumi.Input<inputs.SpringCloudConnectionAuthentication>;
    clientType?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    secretStore?: pulumi.Input<inputs.SpringCloudConnectionSecretStore>;
    springCloudId?: pulumi.Input<string>;
    targetResourceId?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.SpringCloudConnectionTimeouts>;
    vnetSolution?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a SpringCloudConnection resource.
 */
export interface SpringCloudConnectionArgs {
    authentication: pulumi.Input<inputs.SpringCloudConnectionAuthentication>;
    clientType?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    secretStore?: pulumi.Input<inputs.SpringCloudConnectionSecretStore>;
    springCloudId: pulumi.Input<string>;
    targetResourceId: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.SpringCloudConnectionTimeouts>;
    vnetSolution?: pulumi.Input<string>;
}
