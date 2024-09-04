// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class ApiGatewayUpdateService extends pulumi.CustomResource {
    /**
     * Get an existing ApiGatewayUpdateService resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ApiGatewayUpdateServiceState, opts?: pulumi.CustomResourceOptions): ApiGatewayUpdateService {
        return new ApiGatewayUpdateService(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'tencentcloud:index/apiGatewayUpdateService:ApiGatewayUpdateService';

    /**
     * Returns true if the given object is an instance of ApiGatewayUpdateService.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ApiGatewayUpdateService {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ApiGatewayUpdateService.__pulumiType;
    }

    /**
     * The name of the environment to be switched, currently supporting three environments: test (test environment), prepub
     * (pre release environment), and release (release environment).
     */
    public readonly environmentName!: pulumi.Output<string>;
    /**
     * Service ID.
     */
    public readonly serviceId!: pulumi.Output<string>;
    /**
     * The version number of the switch.
     */
    public readonly versionName!: pulumi.Output<string>;

    /**
     * Create a ApiGatewayUpdateService resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ApiGatewayUpdateServiceArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ApiGatewayUpdateServiceArgs | ApiGatewayUpdateServiceState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ApiGatewayUpdateServiceState | undefined;
            resourceInputs["environmentName"] = state ? state.environmentName : undefined;
            resourceInputs["serviceId"] = state ? state.serviceId : undefined;
            resourceInputs["versionName"] = state ? state.versionName : undefined;
        } else {
            const args = argsOrState as ApiGatewayUpdateServiceArgs | undefined;
            if ((!args || args.environmentName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'environmentName'");
            }
            if ((!args || args.serviceId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'serviceId'");
            }
            if ((!args || args.versionName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'versionName'");
            }
            resourceInputs["environmentName"] = args ? args.environmentName : undefined;
            resourceInputs["serviceId"] = args ? args.serviceId : undefined;
            resourceInputs["versionName"] = args ? args.versionName : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ApiGatewayUpdateService.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ApiGatewayUpdateService resources.
 */
export interface ApiGatewayUpdateServiceState {
    /**
     * The name of the environment to be switched, currently supporting three environments: test (test environment), prepub
     * (pre release environment), and release (release environment).
     */
    environmentName?: pulumi.Input<string>;
    /**
     * Service ID.
     */
    serviceId?: pulumi.Input<string>;
    /**
     * The version number of the switch.
     */
    versionName?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a ApiGatewayUpdateService resource.
 */
export interface ApiGatewayUpdateServiceArgs {
    /**
     * The name of the environment to be switched, currently supporting three environments: test (test environment), prepub
     * (pre release environment), and release (release environment).
     */
    environmentName: pulumi.Input<string>;
    /**
     * Service ID.
     */
    serviceId: pulumi.Input<string>;
    /**
     * The version number of the switch.
     */
    versionName: pulumi.Input<string>;
}
