// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class ObjectFirewallAccessproxyApigatewaySslciphersuites extends pulumi.CustomResource {
    /**
     * Get an existing ObjectFirewallAccessproxyApigatewaySslciphersuites resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ObjectFirewallAccessproxyApigatewaySslciphersuitesState, opts?: pulumi.CustomResourceOptions): ObjectFirewallAccessproxyApigatewaySslciphersuites {
        return new ObjectFirewallAccessproxyApigatewaySslciphersuites(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'fortimanager:index/objectFirewallAccessproxyApigatewaySslciphersuites:ObjectFirewallAccessproxyApigatewaySslciphersuites';

    /**
     * Returns true if the given object is an instance of ObjectFirewallAccessproxyApigatewaySslciphersuites.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ObjectFirewallAccessproxyApigatewaySslciphersuites {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ObjectFirewallAccessproxyApigatewaySslciphersuites.__pulumiType;
    }

    public readonly accessProxy!: pulumi.Output<string>;
    public readonly adom!: pulumi.Output<string | undefined>;
    public readonly apiGateway!: pulumi.Output<string>;
    public readonly cipher!: pulumi.Output<string | undefined>;
    public readonly priority!: pulumi.Output<number>;
    public readonly scopetype!: pulumi.Output<string | undefined>;
    public readonly versions!: pulumi.Output<string[]>;

    /**
     * Create a ObjectFirewallAccessproxyApigatewaySslciphersuites resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ObjectFirewallAccessproxyApigatewaySslciphersuitesArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ObjectFirewallAccessproxyApigatewaySslciphersuitesArgs | ObjectFirewallAccessproxyApigatewaySslciphersuitesState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ObjectFirewallAccessproxyApigatewaySslciphersuitesState | undefined;
            resourceInputs["accessProxy"] = state ? state.accessProxy : undefined;
            resourceInputs["adom"] = state ? state.adom : undefined;
            resourceInputs["apiGateway"] = state ? state.apiGateway : undefined;
            resourceInputs["cipher"] = state ? state.cipher : undefined;
            resourceInputs["priority"] = state ? state.priority : undefined;
            resourceInputs["scopetype"] = state ? state.scopetype : undefined;
            resourceInputs["versions"] = state ? state.versions : undefined;
        } else {
            const args = argsOrState as ObjectFirewallAccessproxyApigatewaySslciphersuitesArgs | undefined;
            if ((!args || args.accessProxy === undefined) && !opts.urn) {
                throw new Error("Missing required property 'accessProxy'");
            }
            if ((!args || args.apiGateway === undefined) && !opts.urn) {
                throw new Error("Missing required property 'apiGateway'");
            }
            resourceInputs["accessProxy"] = args ? args.accessProxy : undefined;
            resourceInputs["adom"] = args ? args.adom : undefined;
            resourceInputs["apiGateway"] = args ? args.apiGateway : undefined;
            resourceInputs["cipher"] = args ? args.cipher : undefined;
            resourceInputs["priority"] = args ? args.priority : undefined;
            resourceInputs["scopetype"] = args ? args.scopetype : undefined;
            resourceInputs["versions"] = args ? args.versions : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ObjectFirewallAccessproxyApigatewaySslciphersuites.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ObjectFirewallAccessproxyApigatewaySslciphersuites resources.
 */
export interface ObjectFirewallAccessproxyApigatewaySslciphersuitesState {
    accessProxy?: pulumi.Input<string>;
    adom?: pulumi.Input<string>;
    apiGateway?: pulumi.Input<string>;
    cipher?: pulumi.Input<string>;
    priority?: pulumi.Input<number>;
    scopetype?: pulumi.Input<string>;
    versions?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * The set of arguments for constructing a ObjectFirewallAccessproxyApigatewaySslciphersuites resource.
 */
export interface ObjectFirewallAccessproxyApigatewaySslciphersuitesArgs {
    accessProxy: pulumi.Input<string>;
    adom?: pulumi.Input<string>;
    apiGateway: pulumi.Input<string>;
    cipher?: pulumi.Input<string>;
    priority?: pulumi.Input<number>;
    scopetype?: pulumi.Input<string>;
    versions?: pulumi.Input<pulumi.Input<string>[]>;
}
