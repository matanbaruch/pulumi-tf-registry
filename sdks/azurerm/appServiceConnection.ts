// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class AppServiceConnection extends pulumi.CustomResource {
    /**
     * Get an existing AppServiceConnection resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: AppServiceConnectionState, opts?: pulumi.CustomResourceOptions): AppServiceConnection {
        return new AppServiceConnection(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azurerm:index/appServiceConnection:AppServiceConnection';

    /**
     * Returns true if the given object is an instance of AppServiceConnection.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is AppServiceConnection {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === AppServiceConnection.__pulumiType;
    }

    public readonly appServiceId!: pulumi.Output<string>;
    public readonly authentication!: pulumi.Output<outputs.AppServiceConnectionAuthentication>;
    public readonly clientType!: pulumi.Output<string | undefined>;
    public readonly name!: pulumi.Output<string>;
    public readonly secretStore!: pulumi.Output<outputs.AppServiceConnectionSecretStore | undefined>;
    public readonly targetResourceId!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.AppServiceConnectionTimeouts | undefined>;
    public readonly vnetSolution!: pulumi.Output<string | undefined>;

    /**
     * Create a AppServiceConnection resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AppServiceConnectionArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: AppServiceConnectionArgs | AppServiceConnectionState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as AppServiceConnectionState | undefined;
            resourceInputs["appServiceId"] = state ? state.appServiceId : undefined;
            resourceInputs["authentication"] = state ? state.authentication : undefined;
            resourceInputs["clientType"] = state ? state.clientType : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["secretStore"] = state ? state.secretStore : undefined;
            resourceInputs["targetResourceId"] = state ? state.targetResourceId : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["vnetSolution"] = state ? state.vnetSolution : undefined;
        } else {
            const args = argsOrState as AppServiceConnectionArgs | undefined;
            if ((!args || args.appServiceId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'appServiceId'");
            }
            if ((!args || args.authentication === undefined) && !opts.urn) {
                throw new Error("Missing required property 'authentication'");
            }
            if ((!args || args.targetResourceId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'targetResourceId'");
            }
            resourceInputs["appServiceId"] = args ? args.appServiceId : undefined;
            resourceInputs["authentication"] = args ? args.authentication : undefined;
            resourceInputs["clientType"] = args ? args.clientType : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["secretStore"] = args ? args.secretStore : undefined;
            resourceInputs["targetResourceId"] = args ? args.targetResourceId : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["vnetSolution"] = args ? args.vnetSolution : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(AppServiceConnection.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering AppServiceConnection resources.
 */
export interface AppServiceConnectionState {
    appServiceId?: pulumi.Input<string>;
    authentication?: pulumi.Input<inputs.AppServiceConnectionAuthentication>;
    clientType?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    secretStore?: pulumi.Input<inputs.AppServiceConnectionSecretStore>;
    targetResourceId?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.AppServiceConnectionTimeouts>;
    vnetSolution?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a AppServiceConnection resource.
 */
export interface AppServiceConnectionArgs {
    appServiceId: pulumi.Input<string>;
    authentication: pulumi.Input<inputs.AppServiceConnectionAuthentication>;
    clientType?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    secretStore?: pulumi.Input<inputs.AppServiceConnectionSecretStore>;
    targetResourceId: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.AppServiceConnectionTimeouts>;
    vnetSolution?: pulumi.Input<string>;
}
