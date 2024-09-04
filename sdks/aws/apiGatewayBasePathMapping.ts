// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class ApiGatewayBasePathMapping extends pulumi.CustomResource {
    /**
     * Get an existing ApiGatewayBasePathMapping resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ApiGatewayBasePathMappingState, opts?: pulumi.CustomResourceOptions): ApiGatewayBasePathMapping {
        return new ApiGatewayBasePathMapping(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aws:index/apiGatewayBasePathMapping:ApiGatewayBasePathMapping';

    /**
     * Returns true if the given object is an instance of ApiGatewayBasePathMapping.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ApiGatewayBasePathMapping {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ApiGatewayBasePathMapping.__pulumiType;
    }

    public readonly apiId!: pulumi.Output<string>;
    public readonly basePath!: pulumi.Output<string | undefined>;
    public readonly domainName!: pulumi.Output<string>;
    public readonly stageName!: pulumi.Output<string | undefined>;

    /**
     * Create a ApiGatewayBasePathMapping resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ApiGatewayBasePathMappingArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ApiGatewayBasePathMappingArgs | ApiGatewayBasePathMappingState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ApiGatewayBasePathMappingState | undefined;
            resourceInputs["apiId"] = state ? state.apiId : undefined;
            resourceInputs["basePath"] = state ? state.basePath : undefined;
            resourceInputs["domainName"] = state ? state.domainName : undefined;
            resourceInputs["stageName"] = state ? state.stageName : undefined;
        } else {
            const args = argsOrState as ApiGatewayBasePathMappingArgs | undefined;
            if ((!args || args.apiId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'apiId'");
            }
            if ((!args || args.domainName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'domainName'");
            }
            resourceInputs["apiId"] = args ? args.apiId : undefined;
            resourceInputs["basePath"] = args ? args.basePath : undefined;
            resourceInputs["domainName"] = args ? args.domainName : undefined;
            resourceInputs["stageName"] = args ? args.stageName : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ApiGatewayBasePathMapping.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ApiGatewayBasePathMapping resources.
 */
export interface ApiGatewayBasePathMappingState {
    apiId?: pulumi.Input<string>;
    basePath?: pulumi.Input<string>;
    domainName?: pulumi.Input<string>;
    stageName?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a ApiGatewayBasePathMapping resource.
 */
export interface ApiGatewayBasePathMappingArgs {
    apiId: pulumi.Input<string>;
    basePath?: pulumi.Input<string>;
    domainName: pulumi.Input<string>;
    stageName?: pulumi.Input<string>;
}
